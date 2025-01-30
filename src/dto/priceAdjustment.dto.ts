import { IsBoolean, IsInt, IsOptional, IsArray, ValidateIf, IsNotEmpty } from 'class-validator';

export enum STATUS {
  ACTIVE = 0x1,
  FINISHED = 0x2,
}

export enum PERIOD {
  MONTHLY = 0x1,
  BIMONTHLY = 0x2,
  QUARTERLY = 0x4,
  SEMIANNUAL = 0x8,
  ANNUAL = 0x10,
}

export enum ADJUSTMENT_TYPE {
  AMOUNT = 0x1,
  PERCENTAGE = 0x2,
}

export class CreatePriceAdjustmentDto {
  @IsInt()
  amount: number;

  @IsInt()
  type: ADJUSTMENT_TYPE;

  @IsInt()
  period: PERIOD;

  @IsBoolean()
  applyToAll: boolean;

  @ValidateIf((o) => !o.applyToAll)
  @IsArray()
  @IsInt({ each: true }) 
  @IsNotEmpty({ each: true }) 
  selectedLocations?: number[];

  @IsOptional()
  @IsInt()
  status?: STATUS;
}