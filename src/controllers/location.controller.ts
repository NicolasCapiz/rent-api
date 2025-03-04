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
// import { PrismaService } from '../prisma.service';
import { PrismaService } from '../services/prisma.service';
import { Location } from '../../prisma/generated';
import { SharedService } from 'src/shared/services/shared.service';
import { BulkResponse } from 'src/types/bulk-response.types';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { DashboardFiltersDto } from 'src/dto/dashboard.filters.dto';
const MODEL = 'location',
  RESPONSE = 'locations';

@UseGuards(JwtAuthGuard)
@Controller('locations')
export class LocationController {
  constructor(
    private readonly prisma: PrismaService,
    private sharedService: SharedService,
  ) {}

  @Get()
  async getMeLocations(
    @Query() filters: DashboardFiltersDto,
    @CustId() custId: number
  ): Promise<any[]> {
    return await this.prisma.buildQuery(
      'location',
      filters,
      ['name', 'address', 'renter.firstName', 'renter.lastName'],
      custId,
    );
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

  @Put()
  async updateLocations(
    @Body() locationsData: Location[],
    @CustId() custId: number,
  ): Promise<BulkResponse<Location>> {
    
    return this.sharedService.processBulk(locationsData, MODEL, RESPONSE,custId);
  }

  @Delete(':id')
  async deleteLocation(@Param('id') id: string): Promise<Object> {
    // Convertir el ID a tipo Int
    const locationId = parseInt(id);
    try {
      await this.prisma.location.delete({
        where: {
          id: locationId,
        },
      });
      return { status: 'ok', message: 'Locations deleted successfully' };
    } catch (error) {}
  }

  @Delete()
  async deleteLocations(@Body() ids: number[]): Promise<void> {
    console.log('acaaaa ids', ids);

    await this.prisma.location.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
