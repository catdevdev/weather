import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class TippingBucketRainGaugeService {
  constructor(private readonly prismaService: PrismaService) {}

  async triggerTippingBucketRainGauge(apiKey: string) {
    const weatherStation = await this.prismaService.weatherStation.findUnique({
      where: {
        api_key: apiKey,
      },
    });

    if (!weatherStation) {
      throw new Error('Wrong api key!');
    }

    await this.prismaService.tippingBucketRainGauge.create({
      data: {
        WeatherStation: {
          connect: {
            id: weatherStation.id,
          },
        },
      },
    });
  }

  async getPrecipitationPerHour(weatherStationId: string) {
    const tippingBucketRainGaugeRecords =
      this.prismaService.tippingBucketRainGauge.findMany({
        where: { weatherStationId: { equals: weatherStationId } },
      });

    return tippingBucketRainGaugeRecords;
  }
}
