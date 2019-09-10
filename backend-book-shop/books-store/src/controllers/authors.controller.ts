import { Controller,  Get, Param, Body, Post, Put, Delete, UseGuards} from '@nestjs/common';
import { AuthorsService } from 'src/services/index';
import { Authors , CreateAuthors} from 'src/model/index';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/common/guards/auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('authors')
@ApiBearerAuth()

@Controller('authors')
export class AuthorsController {
    constructor(
        private readonly authorService: AuthorsService) {}

        @Get('getAll')
        @UseGuards(AuthGuard('jwt'), RolesGuard)
        @ApiResponse({ status: 201, description: 'The authors has been successfully fetched.', type: Authors})
        @ApiResponse({ status: 403, description: 'Forbidden.'})
        public getAll(): Promise<Authors[]> {
            return this.authorService.getAll();
        }

        @Get('getAuthorById/:id')
        @UseGuards(AuthGuard('jwt'), RolesGuard)
        @ApiResponse({ status: 201, description: 'The authors has been successfully fetched.', type: Authors})
        @ApiResponse({ status: 403, description: 'Forbidden.'})
        public getAuthorById(@Param('id') id: string): Promise<Authors> {
            return this.authorService.getOneAuthor(id);
        }

        @Post('')
        @UseGuards(AuthGuard('jwt'), RolesGuard)
        @ApiResponse({ status: 201, description: 'The authors has been successfully fetched.', type: Authors})
        @ApiResponse({ status: 403, description: 'Forbidden.'})
        public createAuthor(@Body() newAuthor: CreateAuthors): Promise<Authors> {
            return  this.authorService.create(newAuthor);
        }

        @Delete('delete/:id')
        @UseGuards(AuthGuard('jwt'), RolesGuard)
        @ApiResponse({ status: 201, description: 'The authors has been successfully fetched.', type: Authors})
        @ApiResponse({ status: 403, description: 'Forbidden.'})
        public async deleteUser(@Param(':id') userID) {
            return await this.authorService.delete(userID);
        }

        @Put(':id')
        @UseGuards(AuthGuard('jwt'), RolesGuard)
        @ApiResponse({ status: 201, description: 'The authors has been successfully fetched.', type: Authors})
        @ApiResponse({ status: 403, description: 'Forbidden.'})
        public editAuthor(@Body() authors: CreateAuthors, @Param('id') id: string): Promise<Authors> {
            const author = this.authorService.update(id, authors);
            return author;
  }
}
