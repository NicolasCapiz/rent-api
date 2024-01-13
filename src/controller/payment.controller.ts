import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { Payment } from '../../prisma/generated/prisma-client-js';

@Controller('payments')
export class PaymentController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAllPayments(): Promise<Payment[]> {
    return this.prisma.payment.findMany();
  }

  @Get(':id')
  async getPaymentById(@Param('id') id: string): Promise<Payment> {
    return this.prisma.payment.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createPayment(@Body() paymentData: Payment): Promise<Payment> {
    return this.prisma.payment.create({
      data: paymentData,
    });
  }

  @Put(':id')
  async updatePayment(
    @Param('id') id: string,
    @Body() paymentData: Payment,
  ): Promise<Payment> {
    return this.prisma.payment.update({
      where: { id: parseInt(id) },
      data: paymentData,
    });
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: string): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id: parseInt(id) },
    });
  }
}
