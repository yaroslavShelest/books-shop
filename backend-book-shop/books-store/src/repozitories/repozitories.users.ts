import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserDoc } from 'src/documents/documentMongo/doc.users';
<<<<<<< HEAD
import { CreateUser } from 'src/model/index';
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0

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

<<<<<<< HEAD
    async create(user: CreateUser): Promise<UserDoc> {
=======
    async create(user: UserDoc): Promise<UserDoc> {
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
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
