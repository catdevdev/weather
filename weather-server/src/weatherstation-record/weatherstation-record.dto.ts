import { Prisma } from '@prisma/client';
import {
  IsNumber,
  IsOptional,
  IsObject,
  IsString,
  IsDate,
  IsDateString,
} from 'class-validator';

export class CreateWeatherRecordDto {
  @IsObject()
  readonly weatherRecord?: Prisma.JsonObject;
}

export class GetWeatherRecordsDto {
  @IsString()
  readonly weatherStationId: string;

  @IsDateString()
  readonly gte: string;

  @IsDateString()
  readonly lte: string;
}
