import { Injectable } from '@nestjs/common';
import { Authors } from 'src/model/index';
<<<<<<< HEAD
import { AuthorRepository, BooksRepository } from 'src/repozitories/index';
=======
import { AuthorRepository } from 'src/repozitories/repozitories.authors';
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
import { CreateAuthors } from 'src/model/index';

@Injectable()
export class AuthorsService {
    constructor(
<<<<<<< HEAD
        private readonly authorRepository: AuthorRepository,
        private readonly booksRepository: BooksRepository) {}
=======
        private readonly authorRepository: AuthorRepository) {}
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0

    async getAll(): Promise<Authors[]> {
        return this.authorRepository.getAll();
    }

    async getOneAuthor(id: string): Promise<Authors> {
        return this.authorRepository.getOneAuthor( id );
    }

    async create(author: Authors): Promise<Authors> {
        return  this.authorRepository.create(author);
    }

    async delete(id: string): Promise<Authors> {
<<<<<<< HEAD
        this.booksRepository.deleteAuthorFromBooks(id);
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
        return this.authorRepository.delete(id);
    }

    async update(id: string, author: CreateAuthors): Promise<Authors> {
        return this.authorRepository.update(id, author);
    }
}
