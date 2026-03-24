import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './DTO/register.user.dto';

@Controller('auth') // /auth/register
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @Post('register')
  register(@Body() registerUserDto:RegisterDto) {
    const result = this.authService.registerUser(registerUserDto);
    return result;
  }
}
