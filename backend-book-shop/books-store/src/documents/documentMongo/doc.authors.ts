import { Document } from 'mongoose';

export interface AuthorDoc extends Document {
  readonly  firstName: string;
  readonly  lastName: string;
}
