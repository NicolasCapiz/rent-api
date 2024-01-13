import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
// import { PrismaService } from '../prisma.service';
import { PrismaService } from '../service/prisma.service';
import { Location } from '../../prisma/generated/prisma-client-js';

@Controller('locations')
export class LocationController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAllLocations(): Promise<Location[]> {
    return this.prisma.location.findMany();
  }

  @Get(':id')
  async getLocationById(@Param('id') id: string): Promise<Location> {
    return this.prisma.location.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createLocation(@Body() locationData: Location): Promise<Location> {
    return this.prisma.location.create({
      data: locationData,
    });
  }

  @Put(':id')
  async updateLocation(
    @Param('id') id: string,
    @Body() locationData: Location,
  ): Promise<Location> {
    return this.prisma.location.update({
      where: { id: parseInt(id) },
      data: locationData,
    });
  }

  @Delete(':id')
  async deleteLocation(@Param('id') id: string): Promise<Location> {
    return this.prisma.location.delete({
      where: { id: parseInt(id) },
    });
  }
}
