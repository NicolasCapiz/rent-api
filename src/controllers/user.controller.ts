import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { User } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { BulkResponse } from 'src/types/bulk-response.types';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

const MODEL = 'user',
  RESPONSE = 'users';

@UseGuards(JwtAuthGuard)
@Controller(RESPONSE)
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private sharedService: SharedService,
  ) {}

  @Get()
  async getUsers() {
    return this.prisma.user.findMany();
  }

  @Get('/renters')
  async getMeRenters(
    @CustId() custId: number,
    @Query('search') search: string, // Búsqueda
    @Query('sortKey') sortKey: string, // Clave para ordenar
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc', // Orden ascendente o descendente
  ): Promise<any[]> {

    return await this.prisma.buildQuery(
      MODEL,
      search,
      sortKey,
      sortOrder,
      ['email',
      'firstName',
      'lastName'],
      custId,
    );
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }

  @Put('/renters')
  async updateRenters(
    @Body() rentersData: User[],
    @CustId() custId: number,
  ): Promise<BulkResponse<User>> {
    return this.sharedService.processBulk(rentersData, MODEL, RESPONSE, custId);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
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
