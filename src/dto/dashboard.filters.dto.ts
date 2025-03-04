// src/dto/dashboard-filters.dto.ts
import { IsInt, IsOptional, IsString, IsIn } from 'class-validator';

export class DashboardFiltersDto {
  @IsInt()
  year: number;

  @IsInt()
  month: number;

  @IsOptional()
  @IsString()
  search?: string;
  
  // "0" o undefined significa "todos los locales", o se puede pasar un string con el id del local.
  @IsOptional()
  @IsString()
  local?: string;

  @IsOptional()
  @IsString()
  sortKey?: string;

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';
}
