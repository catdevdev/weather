import { Tokens } from '@auth/types';
import { Injectable } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingUtilsHelper {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashData(password: string) {
    console.log(bcrypt);
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async getTokens(id: number, email: string): Promise<Tokens> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          email: email,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return { access_token, refresh_token };
  }

  async updateRtHash(userId: number, rt: string) {
    const hashedRt = await this.hashData(rt);

    await this.userService.updateRtHash(hashedRt, userId);
  }
}
