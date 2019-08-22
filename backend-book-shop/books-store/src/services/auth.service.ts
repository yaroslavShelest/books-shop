import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(private readonly usersService: UsersService,
                private readonly jwtService: JwtService) {}
    
    async validateUser(username: string, pass: string): Promise<any>{
        const userValidate = await this.usersService.findOneByUsername(username);
        if (userValidate && userValidate.password === pass){
            const { password, ...result } = userValidate;
            return result;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}


