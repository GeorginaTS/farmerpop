import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserLoginDto } from './dto/get-user-login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register-user.dto';
import { VerifyTokenDto } from './dto/verify-token.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: GetUserLoginDto) {
    const response = await this.authService.login(user);
    return response;
  }
  // @Post('signup')
  // async signup(@Body() user: RegisterUserDto) {
  //   const response = await this.authService.register(user);
  //   return response;
  // }

  // @Post('verify')
  // async verifyToken(@Body() token: VerifyTokenDto) {
  //   const response = await this.authService.verifyToken(token);
  //   return response;
  // }
}
