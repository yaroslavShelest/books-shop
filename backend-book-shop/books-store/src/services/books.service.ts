import { Injectable } from '@nestjs/common';
import { BooksRepository, AuthorRepository } from 'src/repozitories/index';
import { Books } from 'src/model/books.model';
import { CreateBooks } from 'src/model/index';

@Injectable()
export class BooksService {
    constructor(
        private readonly bookServiceRepository: BooksRepository,
        private readonly authorRepository: AuthorRepository) {
    }

    public async getAll(): Promise<Books[]> {
        return await this.bookServiceRepository.getAll();
      }

    public async getOneBook(id: string): Promise<Books> {
        return await this.bookServiceRepository.getOneBook(id);
    }
    public async create(book: CreateBooks): Promise<Books> {
        return await this.bookServiceRepository.create(book);
    }

    public async delete(id: string): Promise<Books> {
        this.authorRepository.deleteBooksFromAuthours(id);
        return await this.bookServiceRepository.delete(id);
    }

    public async update(id: string, book: CreateBooks): Promise<Books> {
        return await this.bookServiceRepository.update(id, book);
    }
}
