import { Injectable } from '@nestjs/common';
import { Users } from 'src/model/users.model';
import { UserRepository } from 'src/repozitories/repozitories.users';
import { CreateUser } from 'src/model/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersServiceRepository: UserRepository) {}
        private saltRounds = 10;

    public async getAll(): Promise<Users[]> {
        return await this.usersServiceRepository.getAll();
    }

    public async getOneUser(id: string): Promise<Users> {
        return await this.usersServiceRepository.getOneUser(id);
    }

    public async create(users: CreateUser): Promise<Users> {
        return await this.usersServiceRepository.create(users);
    }

    public async getHash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    public async compareHash(password: string, hash: string): Promise<boolean> {
        return  bcrypt.compare(password, hash);
    }

    public async delete(id: string): Promise<Users> {
        return await this.usersServiceRepository.delete(id);
    }

    public async update( user: Users, id: string): Promise<Users> {
        return await this.usersServiceRepository.update(id, user);
    }
    public async findOneByUsername(user: string): Promise<Users | undefined> {
        return await this.usersServiceRepository.findOneByName(user);
    }
}
