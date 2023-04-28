import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WeatherStationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getWeatherStations() {
    const weatherStations = await this.prismaService.weatherStation.findMany();

    return weatherStations;
  }

  async createWeatherStation(
    latitude: number,
    longitude: number,
    userId: number,
    weatherRecordSchema: Prisma.JsonObject,
  ) {
    const api_key = uuidv4();
    const weatherStation = await this.prismaService.weatherStation.create({
      data: {
        latitude,
        longitude,
        api_key,
        userId,
        weatherRecordSchema,
      },
    });
    return weatherStation;
  }
}
