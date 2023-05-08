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
  @IsDateString()
  readonly gte: string;

  @IsDateString()
  readonly lte: string;

  @IsString()
  readonly weatherStationId: string;
}

export class GetGroupedWeatherRecordsDto {
  @IsDateString()
  readonly gte: string;

  @IsDateString()
  readonly lte: string;

  @IsString()
  readonly weatherStationId: string;

  @IsString()
  readonly groupBy: string;
}
