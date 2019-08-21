import { Injectable } from '@nestjs/common';

import { Users } from 'src/model/users.model'
import { UserRepository } from 'src/repozitories/repozitories.users'



@Injectable()
export class UsersService {
    constructor(private readonly usersServiceRepository: UserRepository) {

    }

    public async findAll(): Promise<Users[]> {
        return await this.usersServiceRepository.findAll();
    }
    
    public async getOneUser(id: string): Promise<Users> {
        return await this.usersServiceRepository.getOneUser(id);
    }


    public async create(users: Users): Promise<Users> {
        return await this.usersServiceRepository.create(users);

    }

    public async delete(id: string): Promise<Users> {

        return await this.usersServiceRepository.delete(id);

    }

    async update( user: Users, id: string): Promise<Users> {
        return await this.usersServiceRepository.update(id, user,);
 }

}

   





    