import { Connection } from 'mongoose';
import { BooksSchema } from 'src/documents/schemas/index';


export const BooksProviders = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (connection: Connection) => connection.model('Books', BooksSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];