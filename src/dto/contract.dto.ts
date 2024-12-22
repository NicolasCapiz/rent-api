import { IsOptional, IsInt, IsDate, IsBoolean } from 'class-validator';

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
  renewed: boolean;

  @IsOptional()
  @IsBoolean()
  cancelled: boolean;

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
