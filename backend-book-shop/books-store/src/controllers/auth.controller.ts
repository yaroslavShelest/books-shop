import { Controller,UseGuards,Post,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';


@Controller('api')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
      return req.user;
    }
}
