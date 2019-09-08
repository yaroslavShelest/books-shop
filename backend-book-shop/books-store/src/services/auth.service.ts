import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/model/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService) {

      }

    // async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOneByUsername(username);
    //     if (user && user.password === pass) {
    //         const { password, ...result } = user;
    //         return result;
    //     }
    //     return null;
    // }
    async validateUser(payload: JwtPayload): Promise<any> {
      return await this.usersService.findOneByUsername(payload.username);
   }

    getToken(user: any): string {
        const payload: any = {};
        payload.username = user.username;
        payload.password = user.password ;

        const accessToken: string = this.jwtService.sign(payload);
        return accessToken;
      }
}
