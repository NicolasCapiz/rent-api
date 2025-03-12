import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as pdfParse from 'pdf-parse';
import { PrismaService } from '../services/prisma.service';
import { MulterFile } from '../types/multer-file.interface';
import { CreateLeaseContractFromPdfDto } from '../dto/contract.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';
import { NotificationService } from './notification.service';

@Injectable()
export class LeaseContractService {
  constructor(private readonly prisma: PrismaService, private readonly notificationService: NotificationService
  ) { }

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
      throw new BadRequestException(
        "No se encontró la ruta temporal del PDF. Por favor, verifique que el archivo se haya subido correctamente."
      );
    }
    return await this.prisma.$transaction(async (prisma) => {
      // Buscar la locación por nombre y asegurarse de que no tenga contratos activos
      const location = await prisma.location.findFirst({
        where: {
          name: dto.localName,
          contracts: { every: { active: false } },
        },
      });
      if (!location) {
        throw new BadRequestException(
          `No se encontró una locación disponible para "${dto.localName}" sin un contrato vigente. Asegúrese de que la locación exista y que no tenga contratos activos.`
        );
      }

      // Buscar o crear el usuario (renter)
      // Buscar el usuario filtrando por DNI y CUST_ID
      let renter = await prisma.user.findFirst({
        where: { dni: dto.tenantDNI, CUST_ID: custId },
      });

      // Si no se encontró, buscamos por DNI solamente
      if (!renter) {
        const existingUser = await prisma.user.findUnique({
          where: { dni: dto.tenantDNI },
        });
        if (existingUser) {
          // Si ya existe, actualizamos el CUST_ID
          renter = await prisma.user.update({
            where: { dni: dto.tenantDNI },
            data: { CUST_ID: custId },
          });
        } else {
          // Si no existe, creamos el usuario
          renter = await prisma.user.create({
            data: {
              dni: dto.tenantDNI,
              firstName: dto.tenantName,
              email: `${dto.tenantName}@gmail.com`,
              isRenter: true,
              CUST_ID: custId,
            } as any,
          });
        }
      }


      // Calcular fechas de inicio y fin del contrato
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

      // Mover el archivo PDF de la ubicación temporal a la definitiva
      let permanentPath: string;
      try {
        permanentPath = await this.movePdfToPermanent(dto.tempPdfPath, location.id);
      } catch (moveError) {
        throw new BadRequestException(
          "Error al mover el PDF a la ubicación definitiva. Por favor, intente de nuevo o contacte soporte."
        );
      }

      const updatedContract = await prisma.leaseContract.update({
        where: { id: contract.id },
        data: { pdfPath: permanentPath },
      });

      // Generar historial de renta (rent history)
      // Se crea un registro para cada mes desde startDate hasta endDate
      let currentDate = new Date(startDate);
      while (currentDate < endDate) {
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const existingHistory = await prisma.rentHistory.findFirst({
          where: {
            locationId: location.id,
            month,
            year,
          },
        });

        if (existingHistory) {
          await prisma.rentHistory.update({
            where: { id: existingHistory.id },
            data: { rentAmount: dto.monthlyRent, createdAt: new Date(), },
          });
        } else {
          await prisma.rentHistory.create({
            data: {
              locationId: location.id,
              month,
              year,
              rentAmount: dto.monthlyRent,
              createdAt: new Date(),
              CUST_ID: custId,
            },
          });
        }
        // Avanza un mes
        currentDate.setMonth(currentDate.getMonth() + 1);
      }


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
    // const nameDniRegex = /y\s+por\s+la\s+otra\s+([A-Za-zÁÉÍÓÚÑáéíóú\s]+?)\s+con\s+cuit\s+[\d-]+\s+dni\s+([\d\.]+)/i;
    const nameDniRegex = /y\s+por\s+la?\s+otra\s+([\p{L}\s]+?)\s+con\s+cuit\s+\d{2}-\d{8}-\d,\s*dni\s*([\d]+)/iu;

    const nameDniMatch = nameDniRegex.exec(text);
    console.log('nameDniMatch', nameDniMatch);

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
    // const monthlyRentRegex = /(?:cuotas mensuales de|la suma de\s*\$?)\s*\(?([\d.,]+)\)?(?:\s*por\s*mes|mensuales?)/i;

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
      include: { renter: true, location: true },
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

    await this.notificationService.sendNotifications(custId, "contractEnded", {
      locationName: contract.location.name,
      endDate: finishedDate.toISOString().split("T")[0],
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
      include: { renter: true, location: true }
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
        // 📩 Notificar al dueño que su contrato ha finalizado automáticamente
        await this.notificationService.sendNotifications(contract.renter.id, "contractEnded", {
          locationName: contract.location.name,
          endDate: now.toISOString().split("T")[0],
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

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async notifyExpiringContracts() {
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    const expiringContracts = await this.prisma.leaseContract.findMany({
      where: {
        endDate: { gte: today, lte: nextMonth },
        active: true,
      },
      include: { renter: { select: { id: true, email: true, notifyContractExpiring: true } }, location: true },
    });

    for (const contract of expiringContracts) {
      if (contract.renter.notifyContractExpiring) {
        await this.notificationService.sendNotifications(contract.renter.id, "contractExpiring", {
          locationName: contract.location.name,
          endDate: contract.endDate.toISOString().split("T")[0],
        });
      }
    }

    console.log(`✅ ${expiringContracts.length} contratos próximos a vencer notificados.`);
  }

  async generateBillingSummary(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { email: true, notifyBillingSummary: true, rentedLocations: { select: { id: true, name: true } } },
    });

    if (!user || user.notifyBillingSummary === "none") return;

    const days = user.notifyBillingSummary === "daily" ? 1 : user.notifyBillingSummary === "weekly" ? 7 : 30;
    const sinceDate = new Date();
    sinceDate.setDate(sinceDate.getDate() - days);

    let message = `Aquí tienes el resumen de facturación de los últimos ${days} días:\n\n`;
    let htmlMessage = `<p>Aquí tienes el resumen de facturación de los últimos ${days} días:</p><ul>`;

    for (const location of user.rentedLocations) {
      const payments = await this.prisma.payment.findMany({
        where: { locationId: location.id, date: { gte: sinceDate } },
        orderBy: { date: "desc" },
        select: { amount: true, date: true },
      });

      if (payments.length > 0) {
        message += `📍 ${location.name}:\n`;
        htmlMessage += `<li><b>${location.name}:</b><ul>`;

        for (const payment of payments) {
          const formattedDate = payment.date.toISOString().split("T")[0];
          message += `  - $${payment.amount} el ${formattedDate}\n`;
          htmlMessage += `<li>$${payment.amount} el ${formattedDate}</li>`;
        }

        htmlMessage += "</ul></li>";
      }
    }

    htmlMessage += "</ul>";

    if (message.length > 50) {
      await this.notificationService.sendNotifications(userId, "billingSummary", {
        summaryText: message,
        summaryHtml: htmlMessage,
      });
    }
  }

  /**
   * 📌 **Cron Job para enviar el Resumen de Facturación**
   * - Se ejecuta todos los días a las 6 AM.
   */
  @Cron("0 6 * * *") // Cada día a las 6 AM
  async sendBillingSummaries() {
    console.log("🔄 Generando y enviando resúmenes de facturación...");

    const users = await this.prisma.user.findMany({
      where: { notifyBillingSummary: { not: "none" } },
      select: { id: true },
    });

    for (const user of users) {
      await this.generateBillingSummary(user.id);
    }

    console.log(`✅ Se enviaron ${users.length} resúmenes de facturación.`);
  }

}
