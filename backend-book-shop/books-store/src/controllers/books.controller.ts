import { Controller, Body, Param, Post, Put, Get, Delete, UseGuards} from '@nestjs/common';
import { Books , CreateBooks} from 'src/model/index';
import { BooksService } from 'src/services/books.service';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/common/guards/auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { SetMetadata } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('books')
@ApiBearerAuth()

@Controller('books')
export class BooksController {
    constructor(
        private booksService: BooksService) {}

    @Get('getAll')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async getAll(): Promise<Books[]> {
        return this.booksService.getAll();
    }

    @Get('getOneBook/:id')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async getById(@Param('id') id: string): Promise<Books> {
        return this.booksService.getOneBook(id);
    }

    @Post('create')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async addBook(@Body() Book: CreateBooks) {
        const book = await this.booksService.create(Book);
        return book;
    }

    @Delete('deleteBook/:id')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    @ApiResponse({ status: 201, description: 'The books has been successfully fetched.', type: Books})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async deleteBook(@Param('id') id: string): Promise<any> {
        return this.booksService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    public update(@Body() updBook: CreateBooks, @Param('id') id: string): Promise<Books> {
        return this.booksService.update(id, updBook);
    }
}
