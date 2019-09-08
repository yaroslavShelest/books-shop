import { Injectable } from '@nestjs/common';
import { Users } from 'src/model/users.model';
import { UserRepository } from 'src/repozitories/repozitories.users';
<<<<<<< HEAD
import { CreateUser } from 'src/model/index';
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersServiceRepository: UserRepository) {}
<<<<<<< HEAD
=======
        private saltRounds = 10;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0

    public async getAll(): Promise<Users[]> {
        return await this.usersServiceRepository.getAll();
    }

    public async getOneUser(id: string): Promise<Users> {
        return await this.usersServiceRepository.getOneUser(id);
    }

<<<<<<< HEAD
    public async create(users: CreateUser): Promise<Users> {
        const { username, password, email, confirmPassword , role , created} = users;
        const salt = await bcrypt.genSalt(10);

        const newuser: CreateUser = {
            username,
            password: await this.getHash(password, salt),
            email,
            confirmPassword,
            role,
            created,
          };

        return await this.usersServiceRepository.create(newuser);
    }

    public async getHash(password: string , saltRounds: string): Promise<string> {
        return await bcrypt.hash(password, saltRounds);
=======
    public async create(users: Users): Promise<Users> {
        return await this.usersServiceRepository.create(users);
    }

    public async getHash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    }

    public async compareHash(password: string, hash: string): Promise<boolean> {
        return  bcrypt.compare(password, hash);
    }
<<<<<<< HEAD

    public async delete(id: string): Promise<Users> {
        return await this.usersServiceRepository.delete(id);
    }

    public async update( user: Users, id: string): Promise<Users> {
        return await this.usersServiceRepository.update(id, user);
    }

=======

    public async delete(id: string): Promise<Users> {
        return await this.usersServiceRepository.delete(id);
    }

    public async update( user: Users, id: string): Promise<Users> {
        return await this.usersServiceRepository.update(id, user);
    }
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    public async findOneByUsername(user: string): Promise<Users | undefined> {
        return await this.usersServiceRepository.findOneByName(user);
    }
}
