import { IsOptional, IsDate, IsString, IsInt } from 'class-validator';

export class CreatePriceAdjustmentDto {
  @IsOptional()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsInt()
  price: number;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  CUST_ID: number;
}

export class UpdatePriceAdjustmentDto extends CreatePriceAdjustmentDto {
  @IsOptional()
  id: number;
}

export class DeletePriceAdjustmentDto {
  @IsOptional()
  id: number;
}
