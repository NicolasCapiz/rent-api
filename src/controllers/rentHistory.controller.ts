import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CustId } from 'src/decorators/cust-id.decorator';
import { Cron } from '@nestjs/schedule';

@UseGuards(JwtAuthGuard)
@Controller('rentHistory')
export class RentHistoryController {
  constructor(private readonly prisma: PrismaService) {}

  
  @Get('location/:id')
  async getRentHistoryByLocation(@Param('id') locationId: string) {
    const rentHistory = await this.prisma.paymentRecord.findMany({
      where: { locationId: parseInt(locationId) },
      orderBy: { year: 'desc' },
    });

    if (!rentHistory.length) {
      throw new HttpException(
        'No se encontró historial de renta para esta ubicación.',
        HttpStatus.NOT_FOUND,
      );
    }

    return rentHistory.map((record) => ({
      ...record,
      remainingAmount: record.totalRent - record.totalPaid,
    }));
  }

  /**
   * ✅ Obtener todos los registros de RentHistory con filtro opcional por ubicación
   */
  @Get()
  async getRentHistory(
    @Query('locationId') locationId?: number,
    @CustId() custId?: number,
  ) {
    const whereClause: any = { CUST_ID: custId };

    if (locationId) {
      whereClause.locationId = Number(locationId);
    }

    return this.prisma.rentHistory.findMany({
      where: whereClause,
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    });
  }

  /**
   * ✅ Obtener un registro de RentHistory por ID
   */
  @Get(':id')
  async getRentHistoryById(@Param('id') id: string) {
    const rentHistory = await this.prisma.rentHistory.findUnique({
      where: { id: Number(id) },
    });

    if (!rentHistory) {
      throw new HttpException('RentHistory no encontrado', HttpStatus.NOT_FOUND);
    }

    return rentHistory;
  }

  /**
   * ✅ Crear un nuevo registro en RentHistory
   */
  @Post()
  async createRentHistory(@Body() rentHistoryData: any, @CustId() custId: number) {
    if (!rentHistoryData.locationId || !rentHistoryData.month || !rentHistoryData.year) {
      throw new HttpException('Faltan datos obligatorios', HttpStatus.BAD_REQUEST);
    }

    // 🔹 Verificar si ya existe un registro para este mes y año
    const existingRecord = await this.prisma.rentHistory.findFirst({
      where: {
        locationId: rentHistoryData.locationId,
        month: rentHistoryData.month,
        year: rentHistoryData.year,
      },
    });

    if (existingRecord) {
      throw new HttpException('Ya existe un registro para este mes y año', HttpStatus.CONFLICT);
    }

    // 🔹 Obtener el último precio registrado en RentHistory
    const lastRentRecord = await this.prisma.rentHistory.findFirst({
      where: { locationId: rentHistoryData.locationId },
      orderBy: { year: 'desc', month: 'desc' },
    });

    // 🔹 Definir el precio base
    const initialRentAmount = lastRentRecord?.rentAmount ?? 0;

    // 🔹 Crear el nuevo registro
    return this.prisma.rentHistory.create({
      data: {
        locationId: rentHistoryData.locationId,
        month: rentHistoryData.month,
        year: rentHistoryData.year,
        rentAmount: initialRentAmount,
        CUST_ID: custId,
      },
    });
  }

  /**
   * ✅ Eliminar un registro de RentHistory por ID
   */
  @Delete(':id')
  async deleteRentHistory(@Param('id') id: string) {
    const existingRecord = await this.prisma.rentHistory.findUnique({
      where: { id: Number(id) },
    });

    if (!existingRecord) {
      throw new HttpException('RentHistory no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.prisma.rentHistory.delete({
      where: { id: Number(id) },
    });
  }

  /**
   * ⏳ CRON: Verifica y crea RentHistory para cada local al inicio del mes
   */
  @Cron('0 5 1 * *') // Se ejecuta cada 1° de mes a las 05:00 AM
  async generateMonthlyRentHistory() {
    console.log('🔄 Verificando y generando RentHistory para el nuevo mes...');

    const now = new Date();
    const currentMonth = now.getMonth() + 1; // Mes actual (1-12)
    const currentYear = now.getFullYear();

    // 🔹 Obtener todas las ubicaciones
    const locations = await this.prisma.location.findMany();

    for (const location of locations) {
      const existingRecord = await this.prisma.rentHistory.findFirst({
        where: {
          locationId: location.id,
          month: currentMonth,
          year: currentYear,
        },
      });

      if (!existingRecord) {
        // 🔹 Obtener el último registro de RentHistory de la ubicación
        const lastRentRecord = await this.prisma.rentHistory.findFirst({
          where: { locationId: location.id },
          orderBy: { year: 'desc', month: 'desc' },
        });

        // 🔹 Definir el monto base del alquiler
        const initialRentAmount = lastRentRecord?.rentAmount ?? 0;

        // 🔹 Crear nuevo registro de RentHistory
        await this.prisma.rentHistory.create({
          data: {
            locationId: location.id,
            month: currentMonth,
            year: currentYear,
            rentAmount: initialRentAmount,
            CUST_ID: location.CUST_ID,
          },
        });

        console.log(`✅ RentHistory creado para local ${location.id}: ${initialRentAmount}`);
      } else {
        console.log(`⚠️ RentHistory ya existe para local ${location.id}, no se crea uno nuevo.`);
      }
    }
  }
}