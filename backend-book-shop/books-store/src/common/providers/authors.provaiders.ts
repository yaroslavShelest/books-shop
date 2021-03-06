import { Connection } from 'mongoose';
import { AuthorSchema } from 'src/documents/schemas/index';

export const AuthorProviders = [
  {
    provide: 'AUTHOR_MODEL',
    useFactory: (connection: Connection) => connection.model('Authors', AuthorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
