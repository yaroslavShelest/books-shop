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

    public async findAll(): Promise<Users[]> {
        return await this.usersModel.find();
    }
    
    public async findOne(id: string): Promise<Users> {
        const param = { _id: id };
        
        return await this.usersModel.findOne({ param });
    }


    public async create(users: Users): Promise<Users> {
        const createNewUser = new this.usersModel(users);

        return await createNewUser.save();

    }

    public async delete(id: string): Promise<Users> {

        return await this.usersModel.findByIdAndRemove(id);

    }

    async update( user: Users, id: string): Promise<Users> {
        return await this.usersModel.findByIdAndUpdate(id, user, { new: true });
 }

}

   





    