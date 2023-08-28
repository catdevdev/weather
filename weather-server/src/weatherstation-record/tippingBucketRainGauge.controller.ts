import { GetCurrentUserId } from '@auth/decorators';
import { AccessTokenGuard } from '@auth/guard';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { WeatherStationRecordService } from './weatherstation-record.service';
import {
  CreateWeatherRecordDto,
  GetGroupedWeatherRecordsDto,
  GetWeatherRecordsDto,
} from './weatherstation-record.dto';

@Controller('weatherstation')
export class WeatherStationRecordController {
  constructor(
    private readonly weatherStationService: WeatherStationRecordService,
  ) {}

  @Post('/tipping-bucket-rain-gauge/:apiKey')
  createWeatherRecord(
    @Param('apiKey') apiKey: string,
    @Body() dto: CreateWeatherRecordDto,
  ) {
    return this.weatherStationService.createWeatherRecord(
      apiKey,
      dto.weatherRecord,
    );
  }

  @Get('/get-tipping-bucket-rain-gauge')
  getWeatherRecords(@Query() dto: GetWeatherRecordsDto) {
    return this.weatherStationService.getWeatherRecords(
      dto.weatherStationId,
      dto.gte,
      dto.lte,
    );
  }
}
