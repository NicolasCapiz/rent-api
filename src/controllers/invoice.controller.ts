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
import { Invoice } from '../../prisma/generated';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getInvoices() {
    return this.prisma.invoice.findMany();
  }

  @Get(':id')
  async getInvoice(@Param('id') id: string) {
    return this.prisma.invoice.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createInvoice(@Body() invoice: Invoice) {
    return this.prisma.invoice.create({
      data: invoice,
    });
  }

  @Put(':id')
  async updateInvoice(@Param('id') id: string, @Body() invoice: Invoice) {
    return this.prisma.invoice.update({
      where: { id: parseInt(id) },
      data: invoice,
    });
  }

  @Delete(':id')
  async deleteInvoice(@Param('id') id: string) {
    return this.prisma.invoice.delete({
      where: { id: parseInt(id) },
    });
  }
}
