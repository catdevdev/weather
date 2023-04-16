import { Prisma } from '@prisma/client';
import { IsNumber, IsOptional, IsObject } from 'class-validator';

export class CreateWeatherRecordDto {
  @IsOptional()
  @IsNumber()
  readonly temperature?: number;

  @IsObject()
  readonly weatherRecord?: Prisma.JsonObject;
}
