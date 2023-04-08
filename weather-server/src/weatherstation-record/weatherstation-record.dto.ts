import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWeatherRecordDto {
  @IsOptional()
  @IsNumber()
  readonly temperature?: number;

  @IsOptional()
  @IsNumber()
  readonly humidity?: number;

  @IsOptional()
  @IsNumber()
  readonly pressure?: number;

  @IsOptional()
  @IsNumber()
  readonly windDirection?: number;

  @IsOptional()
  @IsNumber()
  readonly windSpeed?: number;

  @IsOptional()
  @IsNumber()
  readonly precipitation?: number;
}
