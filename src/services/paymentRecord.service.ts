// src/services/paymentRecord.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { DashboardFiltersDto } from '../dto/dashboard.filters.dto';

@Injectable()
export class PaymentRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async getPaymentRecords(filters: DashboardFiltersDto, custId: number) {
    const year = filters.year ? Number(filters.year) : new Date().getFullYear();
    const month = filters.month ? Number(filters.month) : new Date().getMonth() + 1;

    if (isNaN(year) || isNaN(month)) {
      throw new BadRequestException('Los filtros año y mes deben ser números válidos.');
    }

    return await this.prisma.paymentRecord.findMany({
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0"
          ? { locationId: parseInt(filters.local, 10) }
          : {}),
      },
    });
  }

  // Agregar este método para obtener un PaymentRecord por su ID
  async getPaymentRecordById(id: number, custId: number) {
    const record = await this.prisma.paymentRecord.findFirst({
      where: {
        id,
        CUST_ID: custId,
      },
    });
    if (!record) {
      throw new NotFoundException('PaymentRecord not found');
    }
    return record;
  }

  async getLocationsList(custId: number) {
    return await this.prisma.location.findMany({
      where: { CUST_ID: custId },
      select: { id: true, name: true },
    });
  }
}
