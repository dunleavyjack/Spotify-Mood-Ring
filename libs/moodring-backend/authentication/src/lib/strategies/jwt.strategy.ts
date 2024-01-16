import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

const { NX_NEST_JWT_SECRET } = process.env;

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: NX_NEST_JWT_SECRET,
    });
  }

  async validate(payload: {
    name: string;
    sub: string;
  }): Promise<{ name: string; sub: string }> {
    return payload;
  }
}
