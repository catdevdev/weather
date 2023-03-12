import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigService } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { HashingUtils } from '@auth/helpers/hashing-utils.helper';
import { AtStrategy, RtStrategy } from '@auth/strategies';
import { AuthModule } from '@auth/auth.module';

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
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
