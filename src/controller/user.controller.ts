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
import { User } from '../../prisma/generated/prisma-client-js';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getUsers() {
    return this.prisma.user.findMany();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createUser(@Body() user: User) {
    return this.prisma.user.create({
      data: user,
    });
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User) {
    return this.prisma.user.update({
      where: { id: parseInt(id) },
      data: user,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.prisma.user.delete({
      where: { id: parseInt(id) },
    });
  }
}
