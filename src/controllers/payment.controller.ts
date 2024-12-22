import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Payment } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { FormatDateInterceptor } from '../interceptors/format-date.interceptor';
import { BulkResponse } from 'src/types/bulk-response.types';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

const MODEL = 'payment';
const RESPONSE = 'payments';

@UseGuards(JwtAuthGuard)
@Controller(RESPONSE)
// @UseInterceptors(FormatDateInterceptor)
export class PaymentController {
  constructor(
    private readonly prisma: PrismaService,
    private sharedService: SharedService,
  ) {}

  @Get()
  async getAllPayments(): Promise<Payment[]> {
    return this.prisma.payment.findMany({});
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

  @Put()
  async updatePayments(
    @Body() paymentData: Payment[],
    @CustId() custId: number,
  ): Promise<BulkResponse<Payment>> {
    return this.sharedService.processBulk(paymentData, MODEL, RESPONSE, custId);
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: string): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id: parseInt(id) },
    });
  }
}
