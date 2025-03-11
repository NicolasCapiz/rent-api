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
  Req,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { User } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { BulkResponse } from 'src/types/bulk-response.types';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { DashboardFiltersDto } from 'src/dto/dashboard.filters.dto';
import { UserService } from '../services/user.service';

const MODEL = 'user',
  RESPONSE = 'users';

@UseGuards(JwtAuthGuard)
@Controller(RESPONSE)
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private sharedService: SharedService,
  ) { }

  @Get()
  async getUsers(
    @CustId() custId: number,
    @Query() filters: DashboardFiltersDto,
  ): Promise<any[]> {

    return await this.prisma.buildQuery(
      MODEL,
      filters,
      ['email',
        'firstName',
        'lastName'],
      custId,
    );
  }

  // 🔹 Obtener preferencias de notificación del usuario autenticado usando CustId
  @Get('notifications')
  async getNotificationSettings(@CustId() custId: number) {
    return this.userService.getNotificationSettings(custId);
  }
  // 🔹 Actualizar preferencias de notificación usando CustId
  @Put('notifications')
  async updateNotificationSettings(
    @CustId() custId: number,
    @Body() settings: any
  ) {
    return this.userService.updateNotificationSettings(custId, settings);
  }

  @Get('/renters')
  async getMeRenters(
    @CustId() custId: number,
    @Query() filters: DashboardFiltersDto,
  ): Promise<any[]> {

    return await this.prisma.buildQuery(
      MODEL,
      filters,
      ['email',
        'firstName',
        'lastName'],
      custId,
    );
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const userId = parseInt(id, 10); // Convierte `id` de string a número

    if (isNaN(userId)) {
      throw new BadRequestException("El ID proporcionado no es válido.");
    }

    return this.prisma.user.findUnique({
      where: { id: userId },
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
