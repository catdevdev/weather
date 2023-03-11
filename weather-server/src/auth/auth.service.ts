import { Injectable } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { HashingUtilsHelper } from './helpers/hashing-utils.helper';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashingUtilsHelper: HashingUtilsHelper,
  ) {}

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashingUtilsHelper.hashData(dto.password);

    const newUser = await this.userService.createUser({
      email: dto.email,
      hash,
    });

    const tokens = await this.hashingUtilsHelper.getTokens(
      newUser.id,
      newUser.email,
    );

    await this.hashingUtilsHelper.updateRtHash(
      newUser.id,
      tokens.refresh_token,
    );

    return tokens;
  }

  async signinLocal() {}

  async logout() {}

  async refreshTokens() {}
}
