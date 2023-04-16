import { Prisma } from '@prisma/client';
import { IsNumber, IsOptional, IsObject } from 'class-validator';

export class CreateWeatherRecordDto {
  @IsObject()
  readonly weatherRecord?: Prisma.JsonObject;
}
