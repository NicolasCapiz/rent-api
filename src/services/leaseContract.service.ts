import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as pdfParse from 'pdf-parse';
import { PrismaService } from '../services/prisma.service';
import { MulterFile } from '../types/multer-file.interface';
import { CreateLeaseContractFromPdfDto } from '../dto/contract.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LeaseContractService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllContracts(custId: number) {
    return this.prisma.leaseContract.findMany({
      where: { CUST_ID: custId },
      include: { renter: true, location: true },
    });
  }

  async getContractById(id: number, custId: number) {
    return this.prisma.leaseContract.findFirst({
      where: { id, CUST_ID: custId },
      include: { renter: true, location: true },
    });
  }

  async createContract(contractData: any, custId: number) {
    return this.prisma.leaseContract.create({
      data: { ...contractData, CUST_ID: custId },
    });
  }

  async createContractFromData(
    dto: CreateLeaseContractFromPdfDto & { tempPdfPath?: string },
    custId: number
  ) {
    if (!dto.tempPdfPath) {
      throw new BadRequestException("No se encontró la ruta del PDF temporal.");
    }
    return await this.prisma.$transaction(async (prisma) => {
      // Buscar la locación por nombre y que todos sus contratos estén inactivos
      const location = await prisma.location.findFirst({
        where: {
          name: dto.localName,
          contracts: { every: { active: false } },
        },
      });
      if (!location) {
        throw new BadRequestException(
          `No se encontró una locación disponible para "${dto.localName}" sin contrato vigente.`
        );
      }
      // Buscar o crear el usuario (concesionario)
      let renter = await prisma.user.findUnique({
        where: { dni: dto.tenantDNI },
      });
      if (!renter) {
        renter = await prisma.user.create({
          data: {
            dni: dto.tenantDNI,
            firstName: dto.tenantName,
            isRenter: true,
            CUST_ID: custId,
          } as any,
        });
      } else if (!renter.CUST_ID) {
        renter = await prisma.user.update({
          where: { dni: dto.tenantDNI },
          data: { CUST_ID: custId },
        });
      }
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + dto.contractDuration);
    
      // Crear el contrato inicialmente sin pdfPath
      const contract = await prisma.leaseContract.create({
        data: {
          locationId: location.id,
          startDate,
          endDate,
          rentAmount: dto.monthlyRent,
          active: true,
          cancelled: false,
          renterId: renter.id,
          CUST_ID: custId,
          pdfPath: "", // Se actualizará luego
        },
      });
    
      // Mover el archivo desde la ubicación temporal a la definitiva y eliminar el temporal
      const permanentPath = await this.movePdfToPermanent(dto.tempPdfPath, location.id);
    
      const updatedContract = await prisma.leaseContract.update({
        where: { id: contract.id },
        data: { pdfPath: permanentPath },
      });
      
      return updatedContract;
    });
  }
  

  
  /**
   * Guarda el PDF temporalmente en 'uploads/tmp' y retorna la ruta relativa.
   */
  async storePdfTemporarily(file: MulterFile): Promise<string> {
    const tmpDir = path.join(process.cwd(), 'uploads', 'tmp');
    fs.mkdirSync(tmpDir, { recursive: true });
    const fileName = `tmp_${Date.now()}.pdf`;
    const filePath = path.join(tmpDir, fileName);
    fs.writeFileSync(filePath, file.buffer);
    return path.relative(process.cwd(), filePath);
  }

  /**
   * Mueve el archivo PDF desde la ubicación temporal a una ubicación definitiva
   * organizada por fecha y utilizando el id de la locación, y elimina el archivo temporal.
   * Retorna la ruta relativa definitiva.
   */
  async movePdfToPermanent(tmpPath: string, locationId: number): Promise<string> {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const permDir = path.join(process.cwd(), 'uploads', 'pdfs', year, month, day);
    fs.mkdirSync(permDir, { recursive: true });
    const fileName = `${locationId}_${Date.now()}.pdf`;
    const permanentPath = path.join(permDir, fileName);
    // Mover el archivo: fs.renameSync mueve y elimina el archivo original.
    fs.renameSync(path.join(process.cwd(), tmpPath), permanentPath);
    return path.relative(process.cwd(), permanentPath);
  }

  async processPdf(file: MulterFile) {
    if (!file || !file.buffer) {
      throw new BadRequestException("No se recibió un archivo PDF válido.");
    }
    // Guardar temporalmente el archivo para poder referenciarlo después
    const tempPdfPath = await this.storePdfTemporarily(file);
    const pdfText = await pdfParse(file.buffer);
    const text = pdfText.text;
    const lowerText = text.toLowerCase();

    // Extraer nombre y DNI del concesionario
    const nameDniRegex = /y\s+por\s+la\s+otra\s+([A-Za-zÁÉÍÓÚÑáéíóú\s]+?)\s+con\s+cuit\s+[\d-]+\s+dni\s+([\d\.]+)/i;
    const nameDniMatch = nameDniRegex.exec(text);
    let renterName: string | null = null;
    let renterDni: number | null = null;
    if (nameDniMatch) {
      renterName = nameDniMatch[1].trim().toLowerCase();
      const dniStr = nameDniMatch[2].replace(/\./g, "").trim();
      renterDni = parseInt(dniStr, 10);
    }
    if (!renterName) {
      throw new Error("No se encontró el nombre del concesionario en el PDF.");
    }
    if (!renterDni) {
      throw new Error("No se encontró el DNI del concesionario en el PDF.");
    }

    // Extraer el alquiler mensual
    const monthlyRentRegex = /cuotas mensuales de\s+\(?([\d.,]+)\)?/i;
    const monthlyRentMatch = lowerText.match(monthlyRentRegex);
    let monthlyRent: number | null = null;
    if (monthlyRentMatch) {
      const rentStr = monthlyRentMatch[1].replace(/\./g, "");
      monthlyRent = parseInt(rentStr, 10);
    }
    if (monthlyRent === null || isNaN(monthlyRent)) {
      throw new Error("No se encontró el valor del alquiler mensual en el PDF o es inválido.");
    }

    // Extraer la duración del contrato (en años) y convertir a meses
    const durationRegex = /el plazo contractual será de un\s+\(?(\d+)\)?\s+año/i;
    const durationMatch = lowerText.match(durationRegex);
    let contractDuration: number | null = null;
    if (durationMatch) {
      const years = parseInt(durationMatch[1], 10);
      contractDuration = years * 12;
    }
    if (!contractDuration) {
      throw new Error("No se encontró el plazo contractual en el PDF.");
    }

    // Extraer el canon total
    const totalRentRegex = /\(\$\s*([\d.,]+)-\)/i;
    const totalRentMatch = lowerText.match(totalRentRegex);
    let totalRent: number | null = null;
    if (totalRentMatch) {
      const totalRentStr = totalRentMatch[1].replace(/\./g, "");
      totalRent = parseInt(totalRentStr, 10);
    }
    if (totalRent === null || isNaN(totalRent)) {
      throw new Error("No se encontró el valor del canon total en el PDF o es inválido.");
    }

    // Extraer el nombre del local
    const localNameRegex = /denominado\s*«\s*espacio\s*»\s*(\d+)/i;
    const localNameMatch = text.match(localNameRegex);
    let locationName: string | null = null;
    if (localNameMatch) {
      locationName = `espacio ${localNameMatch[1].trim()}`;
    }
    if (!locationName) {
      throw new Error("No se encontró el nombre del local en el PDF.");
    }

    return {
      renterName,
      renterDni,
      monthlyRent,
      contractDuration,
      totalRent,
      locationName,
      tempPdfPath, // Ruta del archivo temporal
    };
  }

  /**
   * Finaliza un contrato verificando que pertenezca al usuario autenticado.
   * Actualiza finishedDate y pone active en false.
   * Además, elimina los registros en AdjustmentLocation para ajustes activos de esa locación.
   */
  async finalizeContract(contractId: number, custId: number): Promise<any> {
    const contract = await this.prisma.leaseContract.findFirst({
      where: {
        id: contractId,
        CUST_ID: custId,
      },
    });
    if (!contract) {
      throw new NotFoundException("Contrato no encontrado para el usuario autenticado.");
    }
    if (!contract.active) {
      throw new BadRequestException("El contrato ya está finalizado o no está activo.");
    }
    const finishedDate = new Date();
    const updatedContract = await this.prisma.leaseContract.update({
      where: { id: contractId },
      data: {
        finishedDate,
        active: false,
      },
    });
    await this.prisma.adjustmentLocation.deleteMany({
      where: {
        locationId: contract.locationId,
        priceAdjustment: { status: 1 },
      },
    });
    return updatedContract;
  }

  /**
   * Cron: Finaliza automáticamente los contratos activos cuya endDate es menor o igual a la fecha actual.
   * Se ejecuta todos los días a medianoche.
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async finalizeExpiredContracts() {
    const now = new Date();
    const expiredContracts = await this.prisma.leaseContract.findMany({
      where: {
        active: true,
        endDate: { lte: now },
      },
    });
 
    for (const contract of expiredContracts) {
      try {
        await this.prisma.leaseContract.update({
          where: { id: contract.id },
          data: {
            finishedDate: now,
            active: false,
          },
        });
        await this.prisma.adjustmentLocation.deleteMany({
          where: {
            locationId: contract.locationId,
            priceAdjustment: { status: 1 },
          },
        });
        console.log(`Contrato ${contract.id} finalizado automáticamente.`);
      } catch (error) {
        console.error(`Error al finalizar contrato ${contract.id}:`, error);
      }
    }
  }

  /**
   * Limpia los archivos temporales que tengan más de 24 horas.
   * Se ejecuta todos los días a la 1 AM.
   */
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async cleanupTemporaryPdfs() {
    const tmpDir = path.join(process.cwd(), 'uploads', 'tmp');
    if (!fs.existsSync(tmpDir)) {
      console.log('No existe la carpeta de archivos temporales.');
      return;
    }
    const files = fs.readdirSync(tmpDir);
    const now = Date.now();
    const threshold = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

    for (const file of files) {
      const filePath = path.join(tmpDir, file);
      try {
        const stats = fs.statSync(filePath);
        if (now - stats.mtimeMs > threshold) {
          fs.unlinkSync(filePath);
          console.log(`Archivo temporal eliminado: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error eliminando ${filePath}:`, error);
      }
    }
  }
}
