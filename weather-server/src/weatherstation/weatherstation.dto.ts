import { Prisma } from '@prisma/client';
import { IsJSON, IsNumber, IsObject } from 'class-validator';

export class CreateWeatherStationDto {
  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;

  @IsObject()
  readonly weatherRecordSchema: Prisma.JsonObject;
}
