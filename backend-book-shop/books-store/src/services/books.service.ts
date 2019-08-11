
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../model/interfaces/book.interface';


@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private readonly catModel: Model<Book>) {}
}

    