import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from 'src/services/index';
import { JwtPayload } from 'src/model/jwt-payload.model';
import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { jwtConstants } from 'src/common/strategy/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwtConstants.secret,
      });
    }
    async validate(payload: JwtPayload, done: VerifiedCallback) {
      const user = await this.authService.validateUser(payload);
      if (!user) {
        return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
      }
      return done(null, user);
    }
    }
