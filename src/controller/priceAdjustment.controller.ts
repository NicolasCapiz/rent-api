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
import { PriceAdjustment } from '../../prisma/generated/prisma-client-js';

@Controller('priceAdjustments')
export class PriceAdjustmentController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPriceAdjustments() {
    return this.prisma.priceAdjustment.findMany();
  }

  @Get(':id')
  async getPriceAdjustment(@Param('id') id: string) {
    return this.prisma.priceAdjustment.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createPriceAdjustment(@Body() priceAdjustment: PriceAdjustment) {
    return this.prisma.priceAdjustment.create({
      data: priceAdjustment,
    });
  }

  @Put(':id')
  async updatePriceAdjustment(
    @Param('id') id: string,
    @Body() priceAdjustment: PriceAdjustment,
  ) {
    return this.prisma.priceAdjustment.update({
      where: { id: parseInt(id) },
      data: priceAdjustment,
    });
  }

  @Delete(':id')
  async deletePriceAdjustment(@Param('id') id: string) {
    return this.prisma.priceAdjustment.delete({
      where: { id: parseInt(id) },
    });
  }
}
