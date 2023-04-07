import { GetCurrentUserId } from '@auth/decorators';
import { AtGuard } from '@auth/guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { WeatherStationRecordService } from './weatherstation-record.service';
import { CreateWeatherRecordDto } from './weatherstation-record.dto';

@Controller('weatherstation')
export class WeatherStationRecordController {
  constructor(
    private readonly weatherStationService: WeatherStationRecordService,
  ) {}

  @UseGuards(AtGuard)
  @Post('/create-weather-record/:apiKey')
  createWeatherRecord(
    @Param('apiKey') apiKey: string,
    @Body() dto: CreateWeatherRecordDto,
  ) {
    console.log(apiKey);
    console.log('apiKey');
    return this.weatherStationService.createWeatherRecord(
      apiKey,
      dto.temperature,
      dto.humidity,
      dto.pressure,
      dto.windDirection,
      dto.windSpeed,
      dto.precipitation,
    );
  }
}
