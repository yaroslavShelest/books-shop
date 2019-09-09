import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/model/jwt-payload.model';
import { UserLogin } from 'src/model/user-auth.model';
import { LoginResponse } from 'src/model/login-res.model';

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService) {

    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.findOneByUsername(payload.username);
     }

    async login(loginModel: UserLogin): Promise<LoginResponse> {
        const {username, password} = loginModel;
        const user =  await this.usersService.findOneByUsername(username);

        if (!user) {
          throw  new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
        }

        const compare: boolean = await this.usersService.compareHash(password, user.password);

        if (!compare) {
          throw  new HttpException(`Invalid credentials ${password} = ${user.password}`, HttpStatus.BAD_REQUEST);
        }

        const payload: JwtPayload = {
          username: user.username,
          role: user.role,
        };

        const validtoken = this.jwtService.sign(payload);

        const logginedUser: LoginResponse = {
          username: payload.username,
          role: payload.role,
          token: validtoken,
        };

        return logginedUser;
      }
}
