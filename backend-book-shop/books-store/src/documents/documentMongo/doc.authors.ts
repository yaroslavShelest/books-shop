import { Document } from 'mongoose';

export interface AuthorDoc extends Document {
  readonly  id?: string;
  readonly  firstName: string;
  readonly  lastName: string;
  readonly  books: any[];
}
