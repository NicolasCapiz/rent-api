import { IsOptional, IsInt, IsDate } from 'class-validator';

export class CreateKeyDto {
  @IsOptional()
  @IsInt()
  locationId: number;

  @IsOptional()
  @IsDate()
  issueDate: Date;

  @IsOptional()
  @IsDate()
  returnDate: Date;

  @IsOptional()
  @IsInt()
  CUST_ID: number;
}

export class UpdateKeyDto extends CreateKeyDto {
  @IsOptional()
  id: number;
}

export class DeleteKeyDto {
  @IsOptional()
  id: number;
}
