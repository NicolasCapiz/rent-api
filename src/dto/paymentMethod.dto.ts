import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsOptional()
  @IsString()
  name: string;
}

export class UpdatePaymentMethodDto extends CreatePaymentMethodDto {
  @IsOptional()
  id: number;
}

export class DeletePaymentMethodDto {
  @IsOptional()
  id: number;
}
