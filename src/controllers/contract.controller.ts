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
import { Contract } from '../../prisma/generated';

@Controller('contracts')
export class ContractController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getContracts() {
    return this.prisma.contract.findMany();
  }

  @Get(':id')
  async getContract(@Param('id') id: string) {
    return this.prisma.contract.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createContract(@Body() contract: Contract) {
    return this.prisma.contract.create({
      data: contract,
    });
  }

  @Put(':id')
  async updateContract(@Param('id') id: string, @Body() contract: Contract) {
    return this.prisma.contract.update({
      where: { id: parseInt(id) },
      data: contract,
    });
  }

  @Delete(':id')
  async deleteContract(@Param('id') id: string) {
    return this.prisma.contract.delete({
      where: { id: parseInt(id) },
    });
  }
}
