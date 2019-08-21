import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Book } from 'src/documents/documentMongo/doc.books';

@Injectable()
export class BooksRepository {

    constructor(
        @Inject('BOOK_MODEL')
        private readonly bookRepModel: Model<Book>,
      ) {
          
      }
      async create(book: Book): Promise<Book> {
        const createdBook = new this.bookRepModel(book);
        return await createdBook.save();
      }
    
      async getAll(): Promise<Book[]> {
        return await this.bookRepModel.find().exec();
      }
    
      async getOneBook(id: String): Promise<Book> {
        const param = { _id: id };
        return await this.bookRepModel.findOne({param });
      }
    
      async delete(id: String): Promise<Book> {
        return await this.bookRepModel.findByIdAndRemove(id);
      } 
    
      async update(id: String, book: Book): Promise<Book> {
        return await this.bookRepModel.findByIdAndUpdate(id, book, { new: true });
      }
}

