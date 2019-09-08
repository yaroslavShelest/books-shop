import { Injectable } from '@nestjs/common';
import { Authors } from 'src/model/index';
import { AuthorRepository, BooksRepository } from 'src/repozitories/index';
import { CreateAuthors } from 'src/model/index';

@Injectable()
export class AuthorsService {
    constructor(
        private readonly authorRepository: AuthorRepository,
        private readonly booksRepository: BooksRepository) {}

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
        this.booksRepository.deleteAuthorFromBooks(id);
        return this.authorRepository.delete(id);
    }

    async update(id: string, author: CreateAuthors): Promise<Authors> {
        return this.authorRepository.update(id, author);
    }
}
