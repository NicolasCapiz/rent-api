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
import { Key } from '../../prisma/generated/prisma-client-js';

@Controller('keys')
export class KeyController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getKeys() {
    return this.prisma.key.findMany();
  }

  @Get(':id')
  async getKey(@Param('id') id: string) {
    return this.prisma.key.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createKey(@Body() key: Key) {
    return this.prisma.key.create({
      data: key,
    });
  }

  @Put(':id')
  async updateKey(@Param('id') id: string, @Body() key: Key) {
    return this.prisma.key.update({
      where: { id: parseInt(id) },
      data: key,
    });
  }

  @Delete(':id')
  async deleteKey(@Param('id') id: string) {
    return this.prisma.key.delete({
      where: { id: parseInt(id) },
    });
  }
}
