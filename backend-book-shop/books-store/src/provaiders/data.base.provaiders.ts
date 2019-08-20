import * as mongoose from 'mongoose';
import config from "src/environments/config/keys";

export const DatabaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(config.mongoURI)
  }
];


