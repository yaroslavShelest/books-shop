import { Connection } from 'mongoose';
import { UsersSchema } from 'src/documents/schemas/index';


export const BooksProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('Users', UsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];