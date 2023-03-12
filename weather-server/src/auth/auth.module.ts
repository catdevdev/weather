import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HashingUtils } from './helpers';
import { AtStrategy, RtStrategy } from './strategies';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    HashingUtils,
    AtStrategy,
    RtStrategy,
    ConfigService,
  ],
  exports: [AuthService],
  imports: [forwardRef(() => UserModule), JwtModule.register({})],
})
export class AuthModule {}
