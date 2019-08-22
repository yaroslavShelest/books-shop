import { Injectable } from '@nestjs/common';

import { BooksRepository } from 'src/repozitories/repozitories.books'
import { Book } from 'src/model/books.model';


@Injectable()
export class BooksService {
    constructor(private readonly bookServiceRepository: BooksRepository) {

    }

    public async getAll(): Promise<Book[]> {
        const book = await this.bookServiceRepository.getAll();
       
        return  await  book;
      }

    public async getOneBook(id: string): Promise<Book> {
        

        return await this.bookServiceRepository.getOneBook(id);

    } 

    public async create(book: Book): Promise<Book> {
        return await this.bookServiceRepository.create(book);
    }

  
    public async delete(id: string): Promise<Book> {
        return await this.bookServiceRepository.delete(id);
    }
    
    public async update(id: string, book: Book): Promise<Book> {
        return await this.bookServiceRepository.update(id, book);
 }
}

    