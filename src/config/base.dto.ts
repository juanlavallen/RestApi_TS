import { IsDate, IsOptional, IsUUID } from 'class-validator';

export class BaseDto {
  @IsUUID()
  @IsOptional()
  id!: string;

  @IsOptional()
  @IsDate()
  createdAt!: string;

  @IsOptional()
  @IsDate()
  updatedAt!: string;
}
