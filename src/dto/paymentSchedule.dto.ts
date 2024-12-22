import { IsOptional, IsInt, IsDate } from 'class-validator';

export class CreatePaymentScheduleDto {
  @IsOptional()
  @IsInt()
  locationId: number;

  @IsOptional()
  @IsDate()
  dueDate: Date;

  @IsOptional()
  @IsInt()
  CUST_ID: number;
}

export class UpdatePaymentScheduleDto extends CreatePaymentScheduleDto {
  @IsOptional()
  id: number;
}

export class DeletePaymentScheduleDto {
  @IsOptional()
  id: number;
}
