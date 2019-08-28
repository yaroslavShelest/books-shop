import { Controller,  Get, Param, Body, Post, Put, Delete} from '@nestjs/common';
import { AuthorsService } from 'src/services/index';
import { Authors } from 'src/model/index';

@Controller('authors')
export class AuthorsController {
    constructor(
        private readonly authorService: AuthorsService) {}

        @Get('getAll')
        public getAll(): Promise<Authors[]> {
            return this.authorService.getAll();
        }

        @Get('getAuthorById/:id')
        public getAuthorById(@Param('id') id: string): Promise<Authors> {
            return this.authorService.getOneAuthor(id);
        }

        @Post('')
        public createAuthor(@Body() newAuthor: Authors): Promise<Authors> {
            return  this.authorService.create(newAuthor);
        }

        @Delete('delete/:id')
        public async deleteUser(@Param(':id') userID) {
            return await this.authorService.delete(userID);
        }

        @Put(':id')
        public editAuthor(@Body() authors: Authors, @Param('id') id: string): Promise<Authors> {
            const author = this.authorService.update(id, authors);
            return author;
  }
}
