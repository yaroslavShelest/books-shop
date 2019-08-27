import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { BookDoc } from 'src/documents/documentMongo/doc.books';

@Injectable()
export class BooksRepository {
    constructor(
        @Inject('BOOK_MODEL')
        private readonly bookRepModel: Model<BookDoc>,
      ) {

      }
      async create(book: BookDoc): Promise<BookDoc> {
        const createdBook = new this.bookRepModel(book);
        return await createdBook.save();
      }
      async getAll(): Promise<BookDoc[]> {
        return await this.bookRepModel.find().exec();
      }
      async getOneBook(id: string): Promise<BookDoc> {
        const param = { _id: id };
        return await this.bookRepModel.findOne({param });
      }
      async delete(id: string): Promise<BookDoc> {
        return await this.bookRepModel.findByIdAndRemove(id);
      }
      async update(id: string, book: BookDoc): Promise<BookDoc> {
        return await this.bookRepModel.findByIdAndUpdate(id, book, { new: true });
      }
}
