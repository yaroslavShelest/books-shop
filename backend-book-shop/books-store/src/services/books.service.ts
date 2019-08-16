import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../model/books.model';


@Injectable()
export class BooksService {
    constructor(
        @InjectModel('Books') private readonly bookModel: Model<Books>
    ) {

    }
}

    