// src/dto/location.dto.ts
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsInt,
  IsDateString,
  isNumber,
} from 'class-validator';

export class CreateLocationDto {

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsDateString()
  date: string;
}

export class UpdateLocationDto {
  @IsString()
  @IsOptional()
  address?: string;

  @IsDateString()
  @IsOptional()
  date?: string;
}

export class DeleteLocationDto {
  @IsInt()
  id: number;
}
