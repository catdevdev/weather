import { IsNumber } from 'class-validator';

export class CreateWeatherStationDto {
  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;
}
