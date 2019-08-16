import { Controller, Body,Param, Post,Get} from '@nestjs/common';
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
    
    @Get('getAll')

    public getAll(): Promise<Books[]> {

        return this.booksService.getAll();

    }

    @Get('getOneBook')

    public getById(@Param('id') id: string): Promise<Books> {
        
        return this.booksService.getOneBook(id);

    }
}


