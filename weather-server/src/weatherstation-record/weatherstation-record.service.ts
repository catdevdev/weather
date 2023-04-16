import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';

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
}
