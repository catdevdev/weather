import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigService } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from '@auth/auth.module';
import { WeatherStationService } from './weatherstation/weatherstation.service';
import { WeatherStationController } from './weatherstation/weatherstation.controller';
import { WeatherStationRecordService } from './weatherstation-record/weatherstation-record.service';
import { WeatherStationRecordController } from './weatherstation-record/weatherstation-record.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      installSubscriptionHandlers: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
    }),
    UserModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [
    AuthController,
    WeatherStationController,
    WeatherStationRecordController,
  ],
  providers: [WeatherStationService, WeatherStationRecordService],
})
export class AppModule {}
