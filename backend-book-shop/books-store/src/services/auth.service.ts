import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Injectable()
export class AuthService {
    
    constructor(private readonly usersService: UsersService) {}
    
    async validateUser(username: string, pass: string): Promise<any>{
        const userValidate = await this.usersService.findOneByUsername(username);
        if (userValidate && userValidate.password === pass){
            const { password, ...result } = userValidate;
            return result;
        }
        return null;
    }
    
}


