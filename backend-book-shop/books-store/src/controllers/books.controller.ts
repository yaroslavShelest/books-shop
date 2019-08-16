import { Controller, Body, Post} from '@nestjs/common';
import { Books } from 'src/model/books.model';
import { BooksService } from 'src/services/books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Post('create')
    async addBook(@Body() Book: Books) {
        const book = await this.booksService.create(Book);
        return book;
    }
}


