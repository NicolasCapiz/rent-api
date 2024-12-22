import { IsOptional, IsInt, IsDate, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  @IsNotEmpty()
  locationId: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsOptional()
  @IsNotEmpty()
  amount: number;

  @IsInt()
  @IsNotEmpty()
  paymentMethodId: number;

  @IsInt()
  @IsNotEmpty()
  CUST_ID: number;
}

export class UpdatePaymentDto extends CreatePaymentDto {
  @IsOptional()
  id: number;
}

export class DeletePaymentDto {
  @IsOptional()
  id: number;
}
