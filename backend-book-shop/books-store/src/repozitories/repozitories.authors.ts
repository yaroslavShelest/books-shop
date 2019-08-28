import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { AuthorDoc } from 'src/documents/documentMongo/doc.authors';

@Injectable()
export class AuthorRepository {
  constructor(
    @Inject('AUTHOR_MODEL')
    private readonly authorRepModel: Model<AuthorDoc>,
  ) {}

  async getAll(): Promise<AuthorDoc[]> {
    return await this.authorRepModel.find().exec();
  }

  async getOneAuthor(id: string): Promise<AuthorDoc> {
    return await this.authorRepModel.findById(id);
}

  async create(author: AuthorDoc): Promise<AuthorDoc> {
    const createdAuthor = new this.authorRepModel(author);
    return  await createdAuthor.save();
}
  async update(id: string, Author: AuthorDoc): Promise<AuthorDoc> {
    return await this.authorRepModel.findByIdAndUpdate(id, Author, { new: true });
}
  async delete(id: string): Promise<AuthorDoc> {
    return await this.authorRepModel.findByIdAndRemove(id);
}
}
