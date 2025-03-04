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
import { Cron } from '@nestjs/schedule';
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

  @Get()
  async getPriceAdjustments(@CustId() custId: number) {
    return await this.prisma.priceAdjustment.findMany({
      where: { CUST_ID: custId },
      include: { locations: true },
    });
  }

  @Get(':id')
  async getPriceAdjustment(@Param('id') id: string) {
    const adjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
      include: { locations: true },
    });
    if (!adjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }
    return adjustment;
  }

  @Post()
  async createPriceAdjustment(
    @Body() priceAdjustment: CreatePriceAdjustmentDto,
    @CustId() custId: number
  ) {
    // Validar monto
    if (!priceAdjustment.amount || priceAdjustment.amount <= 0) {
      throw new HttpException('El monto debe ser mayor a 0', HttpStatus.BAD_REQUEST);
    }
    // Validar período
    if (!PERIODS.some(p => p.value === priceAdjustment.period)) {
      throw new HttpException('El período seleccionado no es válido', HttpStatus.BAD_REQUEST);
    }
    // Validar locales si no se aplica a todos
    if (!priceAdjustment.applyToAll && (!priceAdjustment.selectedLocations || priceAdjustment.selectedLocations.length === 0)) {
      throw new HttpException('Debes seleccionar al menos una ubicación', HttpStatus.BAD_REQUEST);
    }

    // Si el ajuste se aplica a TODOS, verificar que no exista otro activo con esa opción.
    if (priceAdjustment.applyToAll) {
      const existingAllAdjustment = await this.prisma.priceAdjustment.findFirst({
        where: {
          CUST_ID: custId,
          applyToAll: true,
          status: STATUS.ACTIVE,
        },
      });
      if (existingAllAdjustment) {
        throw new HttpException(
          'Ya existe un ajuste activo que aplica a todos los locales.',
          HttpStatus.BAD_REQUEST
        );
      }
    } else {
      // Si es para algunos, validar que cada local no esté ya en un ajuste activo
      for (const locId of priceAdjustment.selectedLocations) {
        const existingAdjustmentForLocation = await this.prisma.priceAdjustment.findFirst({
          where: {
            CUST_ID: custId,
            applyToAll: false,
            status: STATUS.ACTIVE,
            locations: {
              some: { id: locId },
            },
          },
        });
        if (existingAdjustmentForLocation) {
          throw new HttpException(
            `El local con id ${locId} ya está incluido en un ajuste activo.`,
            HttpStatus.BAD_REQUEST
          );
        }
      }
    }

    return await this.prisma.priceAdjustment.create({
      data: {
        CUST_ID: custId,
        amount: priceAdjustment.amount,
        type: priceAdjustment.type,
        period: priceAdjustment.period,
        applyToAll: priceAdjustment.applyToAll,
        status: priceAdjustment.status || STATUS.ACTIVE,
        locations: priceAdjustment.applyToAll
          ? undefined
          : { connect: priceAdjustment.selectedLocations.map(id => ({ id })) },
      },
    });
  }

  @Put(':id/finalize')
  async finalizeAdjustment(@Param('id') id: string) {
    const adjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });
    if (!adjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }
    if (adjustment.status === STATUS.FINISHED) {
      throw new HttpException('El ajuste ya está finalizado', HttpStatus.BAD_REQUEST);
    }
    return await this.prisma.priceAdjustment.update({
      where: { id: parseInt(id) },
      data: { status: STATUS.FINISHED },
    });
  }

  @Put(':id')
  async updatePriceAdjustment(@Param('id') id: string, @Body() priceAdjustment: CreatePriceAdjustmentDto) {
    const adjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });
    if (!adjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }
    return await this.prisma.priceAdjustment.update({
      where: { id: parseInt(id) },
      data: priceAdjustment,
    });
  }

  @Delete(':id')
  async deletePriceAdjustment(@Param('id') id: string) {
    const adjustment = await this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });
    if (!adjustment) {
      throw new HttpException('Ajuste no encontrado', HttpStatus.NOT_FOUND);
    }
    return await this.prisma.priceAdjustment.delete({
      where: { id: parseInt(id) },
    });
  }

  // Cron Job para aplicar ajustes activos mensualmente
  @Cron('0 4 1 * *')
  async applyActiveAdjustments() {
    console.log('🔄 Aplicando ajustes de precio activos...');
    const activeAdjustments = await this.prisma.priceAdjustment.findMany({
      where: { status: STATUS.ACTIVE },
      include: { locations: true },
    });
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    for (const adjustment of activeAdjustments) {
      const isDue = this.isAdjustmentDue(adjustment.period, adjustment.lastExecutedAt || adjustment.createdAt);
      if (!isDue) continue;
      const locations = adjustment.applyToAll
        ? await this.prisma.location.findMany()
        : adjustment.locations;
      for (const location of locations) {
        const lastRentRecord = await this.prisma.rentHistory.findFirst({
          where: { locationId: location.id },
          orderBy: { year: 'desc' },
        });
        const lastPrice = lastRentRecord?.rentAmount ?? 0;
        const newPrice =
          adjustment.type === ADJUSTMENT_TYPE.AMOUNT
            ? lastPrice + adjustment.amount
            : lastPrice * (1 + adjustment.amount / 100);
        await this.prisma.rentHistory.create({
          data: {
            locationId: location.id,
            month: currentMonth,
            year: currentYear,
            rentAmount: newPrice,
            CUST_ID: adjustment.CUST_ID,
          },
        });
        console.log(`✅ Nuevo precio registrado para local ${location.id}: ${newPrice}`);
      }
      await this.prisma.priceAdjustment.update({
        where: { id: adjustment.id },
        data: { lastExecutedAt: now },
      });
    }
  }

  private isAdjustmentDue(period: number, lastExecutedAt: Date): boolean {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - new Date(lastExecutedAt).getTime()) / (1000 * 60 * 60 * 24));
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
