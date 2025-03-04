// src/controllers/paymentRecord.controller.ts
import { Controller, Get, Query, Param, UseGuards, NotFoundException } from '@nestjs/common';
import { PaymentRecordService } from '../services/paymentRecord.service';
import { DashboardFiltersDto } from '../dto/dashboard.filters.dto';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { PrismaService } from 'src/services/prisma.service';

@UseGuards(JwtAuthGuard)
@Controller('paymentRecords')
export class PaymentRecordController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paymentRecordService: PaymentRecordService) { }

  // Endpoint para obtener la lista de PaymentRecords filtrados
  @Get()
  async getPaymentRecords(
    @Query() filters: DashboardFiltersDto,
    @CustId() custId: number
  ): Promise<any[]> {
    // Suponiendo que buscas en el campo 'day' o lo que necesites
    return await this.prisma.buildQuery(
      'paymentRecord',
      filters,
      ['remainingAmount', 'totalPaid', 'totalRent', 'location.name', 'month', 'year'], // Aquí agrega los campos que desees que sean "buscables"
      custId,
    );
  }


  // Endpoint para obtener un PaymentRecord específico
  @Get(':id')
  async getPaymentRecordById(@Param('id') id: string, @CustId() custId: number) {
    return this.paymentRecordService.getPaymentRecordById(parseInt(id, 10), custId);
  }
}
