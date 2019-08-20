import { Controller,Get } from '@nestjs/common';
import { UsersService } from 'src/services/index';
import { Users } from 'src/model/users.model';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('getAll')

    public getAll(): Promise<Users[]> {

        return this.usersService.findAll();

    }


}

