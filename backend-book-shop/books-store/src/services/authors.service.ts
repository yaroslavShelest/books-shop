import { Injectable } from '@nestjs/common';
import { Authors } from 'src/model/index';
import { AuthorRepository } from 'src/repozitories/repozitories.authors';
import { CreateAuthors } from 'src/model/index';

@Injectable()
export class AuthorsService {
    constructor(
        private readonly authorRepository: AuthorRepository) {}

    async getAll(): Promise<Authors[]> {
        return this.authorRepository.getAll();
    }

    async getOneAuthor(id: string): Promise<Authors> {
        return this.authorRepository.getOneAuthor( id );
    }

    async create(author: CreateAuthors): Promise<Authors> {
        return  this.authorRepository.create(author);
    }

    async delete(id: string): Promise<Authors> {
        return this.authorRepository.delete(id);
    }

    async update(id: string, author: CreateAuthors): Promise<Authors> {
        return this.authorRepository.update(id, author);
    }
}
