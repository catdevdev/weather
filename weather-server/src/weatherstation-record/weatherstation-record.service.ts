import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class WeatherStationRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async createWeatherRecord(
    apiKey: string,
    temperature?: number,
    humidity?: number,
    pressure?: number,
    windDirection?: number,
    windSpeed?: number,
    precipitation?: number,
  ) {
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
        temperature,
        humidity,
        pressure,
        windDirection,
        windSpeed,
        precipitation,
        WeatherStation: {
          connect: {
            id: weatherStation.id,
          },
        },
      },
    });
  }
}
