import { GetCurrentUserId } from '@auth/decorators';
import { AccessTokenGuard } from '@auth/guard';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { WeatherStationRecordService } from './weatherstation-record.service';
import {
  CreateWeatherRecordDto,
  GetWeatherRecordsDto,
} from './weatherstation-record.dto';

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

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
  getWeatherRecords(@Query() dto: GetWeatherRecordsDto) {
    return this.weatherStationService.getWeatherRecords(
      dto.weatherStationId,
      dto.gte,
      dto.lte,
    );
  }

  @Get('/get-average-weather-records')
  getAverageWeatherRecords(@Query() dto: GetWeatherRecordsDto) {
    return this.weatherStationService.getAverageWeatherRecords(
      dto.weatherStationId,
      dto.gte,
      dto.lte,
    );
  }
}
