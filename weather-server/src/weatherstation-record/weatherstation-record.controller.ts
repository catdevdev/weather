import { GetCurrentUserId } from '@auth/decorators';
import { AccessTokenGuard } from '@auth/guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { WeatherStationRecordService } from './weatherstation-record.service';
import {
  CreateWeatherRecordDto,
  GetWeatherRecordsDto,
} from './weatherstation-record.dto';

@Controller('weatherstation')
export class WeatherStationRecordController {
  constructor(
    private readonly weatherStationService: WeatherStationRecordService,
  ) {}

  @Post('/create-weather-record/:apiKey')
  createWeatherRecord(
    @Param('apiKey') apiKey: string,
    @Body() dto: CreateWeatherRecordDto,
  ) {
    return this.weatherStationService.createWeatherRecord(
      apiKey,
      dto.weatherRecord,
    );
  }

  @Get('/get-weather-records')
  getWeatherRecords(@Body() dto: GetWeatherRecordsDto) {
    return this.weatherStationService.getWeatherRecords(
      dto.weatherStationId,
      dto.gte,
      dto.lte,
    );
  }
}
