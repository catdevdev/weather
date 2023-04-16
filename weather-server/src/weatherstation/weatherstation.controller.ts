import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { WeatherStationService } from './weatherstation.service';
import { CreateWeatherStationDto } from './weatherstation.dto';

import { AccessTokenGuard } from '@auth/guard';
import { GetCurrentUserId } from '@auth/decorators';

@Controller('weatherstations')
export class WeatherStationController {
  constructor(private readonly weatherStationService: WeatherStationService) {}

  @UseGuards(AccessTokenGuard)
  @Post('/create-weatherstation')
  createWeatherStation(
    @Body() dto: CreateWeatherStationDto,
    @GetCurrentUserId() userId: number,
  ) {
    return this.weatherStationService.createWeatherStation(
      dto.latitude,
      dto.longitude,
      userId,
      dto.weatherRecordSchema,
    );
  }
}
