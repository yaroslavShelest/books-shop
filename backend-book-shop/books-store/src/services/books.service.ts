import { Injectable } from '@nestjs/common';
import { BooksRepository } from 'src/repozitories/repozitories.books';
import { Books } from 'src/model/books.model';
import { CreateBooks } from 'src/model/index';

@Injectable()
export class BooksService {
    constructor(
        private readonly bookServiceRepository: BooksRepository) {
    }

    public async getAll(): Promise<Books[]> {
        return await this.bookServiceRepository.getAll();
      }

    public async getOneBook(id: string): Promise<Books> {
        return await this.bookServiceRepository.getOneBook(id);
    }
    public async create(book: Books): Promise<Books> {
        return await this.bookServiceRepository.create(book);
    }

    public async delete(id: string): Promise<Books> {
        return await this.bookServiceRepository.delete(id);
    }

    public async update(id: string, book: CreateBooks): Promise<Books> {
        return await this.bookServiceRepository.update(id, book);
 }
}
