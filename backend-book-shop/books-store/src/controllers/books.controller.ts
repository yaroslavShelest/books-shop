import { Controller, Body, Param, Post, Put, Get, Delete} from '@nestjs/common';
import { Books , CreateBooks} from 'src/model/index';
import { BooksService } from 'src/services/books.service';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('books')
@ApiBearerAuth()

@Controller('books')
export class BooksController {
    constructor(
        private booksService: BooksService) {}

    @Get('getAll')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async getAll(): Promise<Books[]> {
        return this.booksService.getAll();
    }

    @Get('getOneBook/:id')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async getById(@Param('id') id: string): Promise<Books> {
        return this.booksService.getOneBook(id);
    }

    @Post('create')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async addBook(@Body() Book: CreateBooks) {
<<<<<<< HEAD
        return await this.booksService.create(Book);
=======
        const book = await this.booksService.create(Book);
        return book;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    }

    @Delete('deleteBook/:id')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async deleteBook(@Param('id') id: string): Promise<any> {
        return this.booksService.delete(id);
    }

    @Put(':id')
    public update(@Body() updBook: CreateBooks, @Param('id') id: string): Promise<Books> {
        return this.booksService.update(id, updBook);

<<<<<<< HEAD
    }
=======
  }
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
}
