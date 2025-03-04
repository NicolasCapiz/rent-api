// src/dto/contract.dto.ts
import { IsOptional, IsInt, IsDate, IsBoolean, IsString } from 'class-validator';

export class CreateLeaseContractFromPdfDto {
  @IsString()
  tenantName: string;

  @IsInt()
  tenantDNI: number;

  @IsInt()
  contractDuration: number; // en meses

  @IsInt()
  monthlyRent: number;

  @IsInt()
  totalRent: number;

  @IsString()
  localName: string;

  empPdfPath?: string;
}

export class CreateContractDto {
  @IsOptional()
  @IsInt()
  locationId: number;

  @IsOptional()
  @IsDate()
  startDate: Date;

  @IsOptional()
  @IsDate()
  endDate: Date;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsBoolean()
  cancelled: boolean;

  // Este campo representa, por ejemplo, el usuario (administrador o similar)
  // que crea el contrato, en caso de que sea necesario.
  @IsOptional()
  @IsInt()
  CUST_ID: number;
}

export class UpdateContractDto extends CreateContractDto {
  @IsOptional()
  id: number;
}

export class DeleteContractDto {
  @IsOptional()
  id: number;
}
