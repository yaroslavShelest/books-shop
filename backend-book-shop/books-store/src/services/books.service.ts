import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { BooksRepository, AuthorRepository } from 'src/repozitories/index';
=======
import { BooksRepository } from 'src/repozitories/repozitories.books';
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
import { Books } from 'src/model/books.model';
import { CreateBooks } from 'src/model/index';

@Injectable()
export class BooksService {
    constructor(
<<<<<<< HEAD
        private readonly bookServiceRepository: BooksRepository,
        private readonly authorRepository: AuthorRepository) {
=======
        private readonly bookServiceRepository: BooksRepository) {
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
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
<<<<<<< HEAD
        this.authorRepository.deleteBooksFromAuthours(id);
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
        return await this.bookServiceRepository.delete(id);
    }

    public async update(id: string, book: CreateBooks): Promise<Books> {
        return await this.bookServiceRepository.update(id, book);
<<<<<<< HEAD
    }
=======
 }
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
}
