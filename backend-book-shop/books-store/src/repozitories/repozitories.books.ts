import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { BookDoc } from 'src/documents/documentMongo/doc.books';
import { CreateBooks } from 'src/model/index';

@Injectable()
export class BooksRepository {
    constructor(
        @Inject('BOOK_MODEL')
        private readonly bookRepModel: Model<BookDoc>,
      ) {

      }

      async create(author: CreateBooks): Promise<BookDoc> {
        const createdBook = new this.bookRepModel(author);
        return await createdBook.save((err, createBook) => {
          createBook
                        .populate('authors')
                        .execPopulate();
      });
    }

      async getAll(): Promise<BookDoc[]> {
        return await this.bookRepModel
                                      .find()
                                      .populate('authors')
                                      .exec();
      }

      async getOneBook(id: string): Promise<BookDoc> {
        const param = { _id: id };
        return await this.bookRepModel
                                      .findOne({param})
                                      .populate('authors')
                                      .exec();
      }

      async delete(id: string): Promise<BookDoc> {
        return await this.bookRepModel
                                      .findByIdAndRemove(id)
                                      .populate('authors')
                                      .exec();
      }

      async update(id: string, book: BookDoc): Promise<BookDoc> {
        return await this.bookRepModel
                                      .findByIdAndUpdate(id, book, { new: true })
                                      .populate('authors')
                                      .exec();
      }

      async deleteAuthorFromBooks(id: string) {
        return  await this.bookRepModel
                                        .updateMany({authors: id},
                                                    {$pull: {authors: id}});
      }
}
