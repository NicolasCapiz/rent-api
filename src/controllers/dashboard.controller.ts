// src/controllers/dashboard.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';
import { DashboardFiltersDto } from '../dto/dashboard.filters.dto';
import { CustId } from '../decorators/cust-id.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('revenue')
  getRevenue(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getRevenue(filters, custId);
  }

  @Get('occupancy')
  getOccupancy(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getOccupancy(filters, custId);
  }

  @Get('payment-status')
  getPaymentStatus(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getPaymentStatus(filters, custId);
  }

  @Get('renter-distribution')
  getRenterDistribution(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    
    return this.dashboardService.getRenterDistribution(filters, custId);
  }

  @Get('rent-comparison')
  getRentComparison(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getRentComparison(filters, custId);
  }

  @Get('daily-revenue')
  getDailyRevenue(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getDailyRevenue(filters, custId);
  }

  @Get('locations')
  getLocations(@CustId() custId: number) {
    return this.dashboardService.getLocations(custId);
  }

  @Get('price-adjustments')
  getPriceAdjustments(@Query() filters: DashboardFiltersDto, @CustId() custId: number) {
    return this.dashboardService.getPriceAdjustments(filters, custId);
  }
}
