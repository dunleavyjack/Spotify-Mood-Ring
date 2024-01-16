import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-spotify';

@Injectable()
export class AuthenticationService {
  constructor(private readonly jwtService: JwtService) {}

  test() {
    console.log('test');
  }

  login(user: Profile) {
    const payload = {
      name: user.username,
      sub: user.id,
    };

    return this.jwtService.sign(payload);
  }
}
