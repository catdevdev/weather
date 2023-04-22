import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { getWeatherRecords } from './algo-api/get-weather-records';

@Injectable()
export class WeatherStationRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async createWeatherRecord(apiKey: string, weatherRecord: Prisma.JsonObject) {
    const weatherStation = await this.prismaService.weatherStation.findUnique({
      where: {
        api_key: apiKey,
      },
    });

    if (!weatherStation) {
      throw new Error('Wrong api key!');
    }

    await this.prismaService.weatherRecord.create({
      data: {
        weatherRecord,
        WeatherStation: {
          connect: {
            id: weatherStation.id,
          },
        },
      },
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
}
