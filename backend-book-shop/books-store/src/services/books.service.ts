import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from 'src/model/books.model';


@Injectable()
export class BooksService {
    constructor(
        @InjectModel('Books') private readonly bookModel: Model<Books>
    ) {

    }
    public async create(book: Books): Promise<Books> {
        const createdBook = new this.bookModel(book);

        return await createdBook.save();

    }
    public async delete(id: string): Promise<Books> {
        return await this.bookModel.findByIdAndRemove(id);
    }

    public async getAll(): Promise<Books[]> {
        const book = await this.bookModel.find();
       
        return  await  book;
      }

    public async getOneBook(id: string): Promise<Books> {
        const param = { _id: id };

        return await this.bookModel.find(param);

    } 
    public async update(id: string, book: Books): Promise<Books> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
 }
}

    