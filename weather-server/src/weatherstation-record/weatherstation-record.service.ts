import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { getWeatherRecords } from './algo-api/get-weather-records';
import { getAverageWeatherRecords } from './algo-api/get-avarage-weather-records';
import { WeatherRecordGateway } from './weather-record.gateway';

@Injectable()
export class WeatherStationRecordService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly weatherRecordGateway: WeatherRecordGateway,
  ) {}

  async createWeatherRecord(apiKey: string, weatherRecord: Prisma.JsonObject) {
    const weatherStation = await this.prismaService.weatherStation.findUnique({
      where: {
        api_key: apiKey,
      },
    });

    if (!weatherStation) {
      throw new Error('Wrong api key!');
    }

    const createdWeatherRecord = await this.prismaService.weatherRecord.create({
      data: {
        weatherRecord,
        WeatherStation: {
          connect: {
            id: weatherStation.id,
          },
        },
      },
    });

    this.weatherRecordGateway.sendLastWeatherRecord({
      roomId: weatherStation.id,
      weatherRecord: createdWeatherRecord,
    });
  }

  async getWeatherRecords(weatherStationId: string, gte: string, lte: string) {
    const { data: weatherRecords } = await getWeatherRecords(
      weatherStationId,
      gte,
      lte,
    );

    return weatherRecords;
  }

  async getAverageWeatherRecords(
    weatherStationId: string,
    gte: string,
    lte: string,
  ) {
    const { data: averageWeatherRecords } = await getAverageWeatherRecords(
      weatherStationId,
      gte,
      lte,
    );

    return averageWeatherRecords;
  }
}
