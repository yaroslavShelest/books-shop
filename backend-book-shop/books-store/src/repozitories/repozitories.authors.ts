import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { AuthorDoc } from 'src/documents/documentMongo/doc.authors';
import { CreateAuthors } from 'src/model/index';

@Injectable()
export class AuthorRepository {
  constructor(
    @Inject('AUTHOR_MODEL')
    private readonly authorRepModel: Model<AuthorDoc>,
  ) {}

  async getAll(): Promise<AuthorDoc[]> {
    return await this.authorRepModel
                                    .find()
                                    .populate('books')
                                    .exec();
  }

  async getOneAuthor(id: string): Promise<AuthorDoc> {
    return await this.authorRepModel
                                    .findById(id)
                                    .populate('books')
                                    .exec();
  }

  async create(author: CreateAuthors): Promise<AuthorDoc> {
    const createdAuthor = new this.authorRepModel(author);
    return await createdAuthor.save((err, createdauthor) => {
      createdauthor
                    .populate('books')
                    .execPopulate();
  });
  }

  async update(id: string, Author: CreateAuthors): Promise<AuthorDoc> {
    return await this.authorRepModel
                                    .findByIdAndUpdate(id, Author, { new: true })
                                    .populate('books')
                                    .exec();
  }

  async delete(id: string): Promise<AuthorDoc> {
    return await this.authorRepModel
                                    .findByIdAndRemove(id)
                                    .populate('books')
                                    .exec();
  }

  async deleteBooksFromAuthours(id: string) {
    return  await this.authorRepModel
                                    .updateMany({books: id},
                                                {$pull: {books: id}});
  }
}
