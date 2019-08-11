import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { BooksController } from '../controllers/books.controller';
import { BookSchema } from '../repozitories/schemas/book.schema';
import { BooksService } from '../services/books.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
