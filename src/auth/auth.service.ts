import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service';

import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async login(createAuthDto: CreateAuthDto): Promise<any> {
    const user = await this.usersService.findByEmail(createAuthDto.email)

    const payload = {
      user: user["user"]
    }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async validateUser(createAuthDto: CreateAuthDto): Promise<any> {
    const { email, password } = createAuthDto

    const user = await this.usersService.findByEmail(email)

    if (!(user["user"].validatePassword(password))) {
      throw new UnauthorizedException()
    }
    return user;
  }
}
