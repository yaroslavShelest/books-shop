import { Controller,Get,Delete,Param } from '@nestjs/common';
import { UsersService } from 'src/services/index';
import { Users } from 'src/model/users.model';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('getAll')

    public getAll(): Promise<Users[]> {

        return this.usersService.findAll();

    }

    @Get('getUserById/:id')

    public getUserById(@Param('id') id: string): Promise<Users> {

        return this.usersService.findOne(id);

    }

    @Delete('delete/:id')
    public async deleteBook(@Param(':id') userID) {
        const users = await this.usersService.delete(userID); 
        return users;
    }


}

