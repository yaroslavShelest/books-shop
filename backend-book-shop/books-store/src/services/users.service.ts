import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Users } from 'src/model/users.model';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private readonly usersModel: Model<Users>
    ) {

    }
    public async create(users: Users): Promise<Users> {

        const createNewUser = new this.usersModel(users);

        return await createNewUser.save();

    }

}

   





    