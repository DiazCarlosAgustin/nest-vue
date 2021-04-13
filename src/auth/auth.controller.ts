import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/login")
  async login(@Body() createAuthDto: CreateAuthDto) {
    return await this.authService.login(createAuthDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async main(){
    return "success!"
  }
}
