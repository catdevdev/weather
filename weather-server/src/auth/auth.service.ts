import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '@user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { Tokens } from './types';
import { HashingUtils } from './helpers/hashing-utils.helper';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashingUtils: HashingUtils,
  ) {}

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const alreadyCreatedUser = await this.userService.getUserByEmail(dto.email);

    if (alreadyCreatedUser) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await argon.hash(dto.password);

    const newUser = await this.userService.createUser({
      email: dto.email,
      hash: hashedPassword,
    });

    const tokens = await this.hashingUtils.getTokens(newUser.id, newUser.email);

    await this.hashingUtils.updateRtHash(newUser.id, tokens.refresh_token);

    return tokens;
  }

  async signinLocal(dto: AuthDto): Promise<Tokens> {
    const user = await this.userService.getUserByEmail(dto.email);
    const passwordMatches = await argon.verify(user.hash, dto.password);

    if (!passwordMatches || !user)
      throw new UnauthorizedException({
        message: 'Wrong email or password',
      });

    const tokens = await this.hashingUtils.getTokens(user.id, user.email);
    await this.hashingUtils.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number) {
    await this.userService.removeRtHash(userId);
    return true;
  }

  async refreshTokens(userId: number, rt: string) {
    const user = await this.userService.getUserById(userId);

    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.hashedRt, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.hashingUtils.getTokens(user.id, user.email);
    await this.hashingUtils.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }
}
