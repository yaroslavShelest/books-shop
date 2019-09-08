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

      async create(book: CreateBooks): Promise<BookDoc> {
        const createdBook = new this.bookRepModel(book);
<<<<<<< HEAD
        const newBook: BookDoc = await createdBook.save((error, createBook) => {
          createBook
                      .populate('authors')
                      .execPopulate();
        });
        return newBook;
=======
        return await createdBook
                                .save();
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
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
