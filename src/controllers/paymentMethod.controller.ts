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
import { PaymentMethod } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { BulkResponse } from 'src/types/bulk-response.types';
import { CustId } from '../decorators/cust-id.decorator';

const MODEL = 'paymentMethod';
const RESPONSE = 'paymentMethods';

@Controller(RESPONSE)
export class PaymentMethodController {
  constructor(
    private readonly prisma: PrismaService,
    private sharedService: SharedService,
  ) {}

  @Get()
  async getAllPaymentMethods(): Promise<PaymentMethod[]> {
    return this.prisma.paymentMethod.findMany();
  }

  @Get(':id')
  async getPaymentMethodById(@Param('id') id: string): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createPaymentMethod(
    @Body() paymentMethodData: PaymentMethod,
  ): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.create({
      data: paymentMethodData,
    });
  }

  @Put(':id')
  async updatePaymentMethod(
    @Param('id') id: string,
    @Body() paymentMethodData: PaymentMethod,
  ): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.update({
      where: { id: parseInt(id) },
      data: paymentMethodData,
    });
  }

  @Put()
  async updatePaymentMethods(
    @Body() paymentMethodData: PaymentMethod[],
    @CustId() custId: number,
  ): Promise<BulkResponse<PaymentMethod>> {
    return this.sharedService.processBulk(paymentMethodData, MODEL, RESPONSE,custId);
  }

  @Delete(':id')
  async deletePaymentMethod(@Param('id') id: string): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.delete({
      where: { id: parseInt(id) },
    });
  }
}
