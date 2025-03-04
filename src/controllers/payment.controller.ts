import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Payment, PaymentRecord, RentHistory } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { DashboardFiltersDto } from 'src/dto/dashboard.filters.dto';

const MODEL = 'payment';
const RESPONSE = 'payments';

@UseGuards(JwtAuthGuard)
@Controller(RESPONSE)
export class PaymentController {
  constructor(
    private readonly prisma: PrismaService,
    private sharedService: SharedService,
  ) {}

  // 🔹 Obtener todos los pagos
  @Get()
async getAllPayments(
  @Query() filters: DashboardFiltersDto,
  @CustId() custId: number,
): Promise<Payment[]> {
  // Define los campos en los que se realizará la búsqueda
  // Por ejemplo, si quieres poder buscar por el monto, mes, año y también por el nombre del local o del método de pago:
  const searchableFields = ['amount', 'month', 'year', 'location.name', 'paymentMethod.name'];

  // Llama a la función buildQuery definida en PrismaService
  const payments = await this.prisma.buildQuery(
    'payment',
    filters,
    searchableFields,
    custId,
  );

  return payments;
}


  // 🔹 Obtener pago por ID
  @Get(':id')
  async getPaymentById(@Param('id') id: string): Promise<Payment> {
    return this.prisma.payment.findUnique({
      where: { id: parseInt(id) },
      include: { paymentMethod: true, location: true },
    });
  }

  @Post()
  async createPayment(@Body() paymentData: any, @CustId() custId: number) {
    const { locationId, amount, paymentMethodId, month, year } = paymentData;
  
    if (!locationId || !amount || !paymentMethodId || !month || !year) {
      throw new HttpException('Todos los campos son obligatorios', HttpStatus.BAD_REQUEST);
    }
  
    // 📌 Buscar o crear el PaymentRecord del mes
    let paymentRecord = await this.prisma.paymentRecord.findFirst({
      where: { locationId, month, year, CUST_ID: custId },
    });
  
    if (!paymentRecord) {
      const rentHistory = await this.prisma.rentHistory.findFirst({
        where: { locationId, month, year, CUST_ID: custId },
      });
  
      if (!rentHistory) {

        throw new HttpException('No existe un historial de renta para esta fecha', HttpStatus.NOT_FOUND);
      }
  
      // Si no existe, lo creamos
      paymentRecord = await this.prisma.paymentRecord.create({
        data: {
          locationId,
          month,
          year,
          totalRent: rentHistory.rentAmount,
          totalPaid: 0,
          remainingAmount: rentHistory.rentAmount,
          CUST_ID: custId,
        },
      });
    }
  
    // 📌 Crear el pago individual
    const payment = await this.prisma.payment.create({
      data: {
        locationId,
        amount,
        paymentMethodId,
        month,
        year,
        paymentRecordId: paymentRecord.id,
        CUST_ID: custId,
      },
    });
  
    // 📌 Actualizar el PaymentRecord
    await this.prisma.paymentRecord.update({
      where: { id: paymentRecord.id },
      data: {
        totalPaid: { increment: amount },
        remainingAmount: { decrement: amount },
      },
    });
  
    return payment;
  }

  // 🔹 Actualizar pago por ID
  @Put(':id')
  async updatePayment(@Param('id') id: string, @Body() paymentData: Payment): Promise<Payment> {
    return this.prisma.payment.update({
      where: { id: parseInt(id) },
      data: paymentData,
    });
  }

  // 🔹 Eliminar un pago
  @Delete(':id')
  async deletePayment(@Param('id') id: string): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id: parseInt(id) },
    });
  }
}