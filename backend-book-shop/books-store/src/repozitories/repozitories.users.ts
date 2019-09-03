import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserDoc } from 'src/documents/documentMongo/doc.users';

@Injectable()
export class UserRepository {
    constructor(
      @Inject('USER_MODEL')
      private readonly userRepModel: Model<UserDoc>,
    ) {

    }

    async getAll(): Promise<UserDoc[]> {
        return await this.userRepModel.find().exec();
      }

    async  getOneUser(id: string): Promise<UserDoc> {
        const param = { _id: id };
        return await this.userRepModel.findOne({param });
      }

    async create(user: UserDoc): Promise<UserDoc> {
        const createdUser = new this.userRepModel(user);
        return await createdUser.save();
      }

    async update(id: string, user: UserDoc): Promise<UserDoc> {
        return await this.userRepModel.findByIdAndUpdate(id, user, { new: true });
      }

    async delete(id: string): Promise<UserDoc> {
        return await this.userRepModel.findByIdAndRemove(id);
      }

    async findOneByName(userlogin: string): Promise<UserDoc> {
        return await this.userRepModel.findOne( { username: userlogin} );
      }
}
