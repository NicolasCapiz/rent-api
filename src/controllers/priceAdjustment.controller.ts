import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreatePriceAdjustmentDto, STATUS, PERIOD, ADJUSTMENT_TYPE } from '../dto/priceAdjustment.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

import { Cron, CronExpression } from '@nestjs/schedule';
import { CustId } from 'src/decorators/cust-id.decorator';
const PERIODS = [
  { value: 0x1, label: "Mensual" },
  { value: 0x2, label: "Bimestral" },
  { value: 0x4, label: "Trimestral" },
  { value: 0x8, label: "Semestral" },
  { value: 0x10, label: "Anual" },
];
@UseGuards(JwtAuthGuard)
@Controller('priceAdjustments')
export class PriceAdjustmentController {
  constructor(private readonly prisma: PrismaService) {}

  @Put(':id/finalize')
  async finalizeAdjustment(@Param('id') id: string) {
    const adjustmentId = parseInt(id, 10);

    // Verificar si el ajuste existe
    const existingAdjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: adjustmentId },
    });

    if (!existingAdjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }

    if (existingAdjustment.status === 2) {
      throw new HttpException('El ajuste ya está finalizado', HttpStatus.BAD_REQUEST);
    }

    // Actualizar estado a "Finalizado"
    return await this.prisma.priceAdjustment.update({
      where: { id: adjustmentId },
      data: { status: STATUS.FINISHED },
    });
  }

  @Get('/run-cron')
  async runCronManually() {
    console.log('Ejecutando cron manualmente...');
    await this.applyActiveAdjustments();
    return { message: 'Cron ejecutado manualmente' };
  }

  @Get()
  async getPriceAdjustments(
    @Query('search') search: string,
    @Query('sortKey') sortKey: string = 'amount',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
    @Query('custId') custId: number,
  ) {
    const searchableFields = ['status', 'period', 'amount', 'type'];

    return this.prisma.buildQuery(
      'priceAdjustment',
      search,
      sortKey,
      sortOrder,
      searchableFields,
      custId,
    );
  }

  @Get(':id')
  async getPriceAdjustment(@Param('id') id: string) {
  console.log('Recibido ID:', id);
  const parsedId = parseInt(id);
  console.log('ID convertido:', parsedId);

  if (isNaN(parsedId)) {
    throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
  }

  const adjustment = await this.prisma.priceAdjustment.findUnique({
    where: { id: parsedId },
  });

  if (!adjustment) {
    throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
  }

  return adjustment;
  }

  @Post()
  async createPriceAdjustment(@Body() priceAdjustment: CreatePriceAdjustmentDto, @CustId() custId: number,) {
    if (!priceAdjustment.amount) {
      throw new HttpException('El monto es obligatorio', HttpStatus.BAD_REQUEST);
    }

    if (priceAdjustment.amount <= 0) {
      throw new HttpException('El monto debe ser un valor positivo', HttpStatus.BAD_REQUEST);
    }

    if (!priceAdjustment.period) {
      throw new HttpException('El periodo es obligatorio', HttpStatus.BAD_REQUEST);
    }

    if (!priceAdjustment.applyToAll && (!priceAdjustment.selectedLocations || priceAdjustment.selectedLocations.length === 0)) {
      throw new HttpException(
        'Si no aplica a todas las localidades, debes seleccionar al menos una.',
        HttpStatus.BAD_REQUEST,
      );
    }

    console.log('priceAdjustment',priceAdjustment.period);
    
    if (!PERIODS.some(p => p.value === priceAdjustment.period)) {
      throw new Error("El periodo seleccionado no es válido");
    }

    // Crear ajuste de precio con relación a las localidades
    const createdAdjustment = await this.prisma.priceAdjustment.create({
      data: {
        CUST_ID: custId,
        amount: priceAdjustment.amount,
        type: priceAdjustment.type,
        period: priceAdjustment.period,
        applyToAll: priceAdjustment.applyToAll,
        status: priceAdjustment.status || STATUS.ACTIVE,
        locations: priceAdjustment.applyToAll
          ? undefined
          : {
            connect: priceAdjustment.selectedLocations?.map((id) => ({ id })), 
          
          },
      },
    });

    return createdAdjustment;
  }

  @Put(':id')
  async updatePriceAdjustment(
    @Param('id') id: string,
    @Body() priceAdjustment: CreatePriceAdjustmentDto,
  ) {
    const existingAdjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingAdjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.prisma.priceAdjustment.update({
      where: { id: parseInt(id) },
      data: priceAdjustment,
    });
  }

  @Delete(':id')
  async deletePriceAdjustment(@Param('id') id: string) {
    const existingAdjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingAdjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.prisma.priceAdjustment.delete({
      where: { id: parseInt(id) },
    });
  }

  /**
   * Cron job para aplicar ajustes activos en base al periodo.
   */
  @Cron('0 0 1 * *')
async applyActiveAdjustments() {
  console.log('Iniciando aplicación de ajustes activos...');

  const activeAdjustments = await this.prisma.priceAdjustment.findMany({
    where: { status: STATUS.ACTIVE },
    include: { locations: true },
  });

  for (const adjustment of activeAdjustments) {
    const now = new Date();

    // Verificar si el ajuste se debe aplicar en base al periodo
    const isDue = this.isAdjustmentDue(adjustment.period, adjustment.lastExecutedAt || adjustment.createdAt);
    console.log(`ID ajuste: ${adjustment.id}, Periodo: ${adjustment.period}, Última ejecución: ${adjustment.lastExecutedAt}, isDue: ${isDue}`);

    if (!isDue) continue;
    console.log('✅ Pase validación del tiempo, aplicando ajuste...');

    // Aplicar el ajuste a las localidades
    if (adjustment.applyToAll) {
      await this.prisma.location.updateMany({
        data: {
          price:
            adjustment.type === ADJUSTMENT_TYPE.AMOUNT
              ? { increment: adjustment.amount } // Sumar monto fijo
              : { multiply: 1 + adjustment.amount / 100 }, // Aumentar porcentaje
        },
      });
    } else {
      for (const location of adjustment.locations) {
        await this.prisma.location.update({
          where: { id: location.id },
          data: {
            price:
              adjustment.type === ADJUSTMENT_TYPE.AMOUNT
                ? { increment: adjustment.amount } // Sumar monto fijo
                : { multiply: 1 + adjustment.amount / 100 }, // Aumentar porcentaje
          },
        });
      }
    }

    // Actualizar la fecha de última ejecución
    await this.prisma.priceAdjustment.update({
      where: { id: adjustment.id },
      data: { lastExecutedAt: now },
    });

    console.log(`✅ Ajuste aplicado con éxito: ID ${adjustment.id}`);
  }
}

 

  private isAdjustmentDue(period: PERIOD, lastExecutedAt: Date): boolean {
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - new Date(lastExecutedAt).getTime()) / (1000 * 60 * 60 * 24),
    );

    console.log('lastExecutedAt', lastExecutedAt);
    console.log('period', period);
    console.log('diffInDays', diffInDays);
    
    switch (period) {
      case PERIOD.MONTHLY:
        return diffInDays >= 30;
      case PERIOD.BIMONTHLY:
        return diffInDays >= 60;
      case PERIOD.QUARTERLY:
        return diffInDays >= 90;
      case PERIOD.SEMIANNUAL:
        return diffInDays >= 180;
      case PERIOD.ANNUAL:
        return diffInDays >= 365;
      default:
        return false;
    }
  }
}