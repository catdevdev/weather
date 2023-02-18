import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
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
