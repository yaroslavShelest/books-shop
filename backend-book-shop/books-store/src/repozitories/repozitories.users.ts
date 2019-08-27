import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/documents/documentMongo/doc.users';

@Injectable()
export class UserRepository {
    constructor(
      @Inject('USER_MODEL')
      private readonly userRepModel: Model<User>,
    ) {

    }

    async findAll(): Promise<User[]> {
        return await this.userRepModel.find().exec();
      }

    async  getOneUser(id: string): Promise<User> {
        const param = { _id: id };
        return await this.userRepModel.findOne({param });
      }

    async create(user: User): Promise<User> {
        const createdUser = new this.userRepModel(user);
        return await createdUser.save();
      }

    async update(id: string, user: User): Promise<User> {
        return await this.userRepModel.findByIdAndUpdate(id, user, { new: true });
      }
    async delete(id: string): Promise<User> {
        return await this.userRepModel.findByIdAndRemove(id);
      }
    async findOneByName(username: string): Promise<User> {
        return await this.userRepModel.findOne( { username: username} );
      }
}
