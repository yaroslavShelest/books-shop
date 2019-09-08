import * as mongoose from 'mongoose';
import { IKeys } from 'src/environments/config/keys';
// import config from 'src/environments/config/keys';

const key: IKeys = {
  mongoURI : 'mongodb+srv://yaroslav:qazxswedc17@cluster0-uzpn8.mongodb.net/test?retryWrites=true&w=majority',
};
export const DatabaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
<<<<<<< HEAD
    mongoose.connect(key.mongoURI , {
      useNewUrlParser: true,
    }),
=======
    mongoose.connect(key.mongoURI),
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
  },
];
