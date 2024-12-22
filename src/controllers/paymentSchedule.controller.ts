import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PaymentSchedule } from '../../prisma/generated';

@Controller('paymentSchedules')
export class PaymentScheduleController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPaymentSchedules() {
    return this.prisma.paymentSchedule.findMany({});
  }

  @Post()
  async createPaymentSchedule(@Body() paymentSchedule: PaymentSchedule) {
    return this.prisma.paymentSchedule.create({
      data: paymentSchedule,
    });
  }

  @Put(':id')
  async updatePaymentSchedule(
    @Param('id') id: string,
    @Body() paymentSchedule: PaymentSchedule,
  ) {
    return this.prisma.paymentSchedule.update({
      where: { id: parseInt(id) },
      data: paymentSchedule,
    });
  }

  @Delete(':id')
  async deletePaymentSchedule(@Param('id') id: string) {
    return this.prisma.paymentSchedule.delete({
      where: { id: parseInt(id) },
    });
  }
}
