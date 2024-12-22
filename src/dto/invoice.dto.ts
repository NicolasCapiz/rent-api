import { IsOptional, IsInt, IsDate } from 'class-validator';

export class CreateInvoiceDto {
  @IsOptional()
  @IsInt()
  locationId: number;

  @IsOptional()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsInt()
  CUST_ID: number;
}

export class UpdateInvoiceDto extends CreateInvoiceDto {
  @IsOptional()
  id: number;
}

export class DeleteInvoiceDto {
  @IsOptional()
  id: number;
}
