import { Injectable } from '@nestjs/common';

import { Books } from 'src/model/books.model';
import { BooksRepository } from 'src/repozitories/repozitories.books'


@Injectable()
export class BooksService {
    constructor(private readonly bookServiceRepository: BooksRepository) {}

    public async getAll(): Promise<Books[]> {
        const book = await this.bookServiceRepository.getAll();
       
        return  await  book;
      }

    public async getOneBook(id: string): Promise<Books> {
        

        return await this.bookServiceRepository.findOne(id);

    } 

    public async create(book: Books): Promise<Books> {
        return await this.bookServiceRepository.create(book);
    }

  
    public async delete(id: string): Promise<Books> {
        return await this.bookServiceRepository.delete(id);
    }
    
    public async update(id: string, book: Books): Promise<Books> {
        return await this.bookServiceRepository.update(id, book);
 }
}

    