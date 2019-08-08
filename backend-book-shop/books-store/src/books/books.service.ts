import { BookDTO } from './../dto/book.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../interfaces/book.interface';


@Injectable()
export class BooksService {}
