import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  singupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  // @Post('/local/singin')
  // signinLocal(@Body() userDto: CreateUserDto) {
  //   this.authService.signinLocal();
  // }

  // @Post('/logout')
  // logout(@Body() userDto: CreateUserDto) {
  //   this.authService.logout();
  // }

  // @Post('/refresh')
  // refreshTokens(@Body() userDto: CreateUserDto) {
  //   this.authService.refreshTokens();
  // }
  // @Post('/login')
  // login(@Body() userDto: CreateUserDto) {
  //   console.log(12);
  //   return this.authService.login(userDto);
  // }

  // @Post('/register')
  // register(@Body() userDto: CreateUserDto) {
  //   return this.authService.register(userDto);
  // }
}
