// src/dto/user.dto.ts
import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  // @IsNotEmpty()
  @IsOptional()
  password?: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export class DeleteUserDto {
  @IsInt()
  id: number;
}
