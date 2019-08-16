import { Controller, Post, Get} from '@nestjs/common';
import { BooksService } from 'src/services/books.service';

@Controller('books')
export class BooksController {}
