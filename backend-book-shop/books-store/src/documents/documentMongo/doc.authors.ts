import { Document } from 'mongoose';

export interface Author extends Document {
  readonly  firstName: string;
  readonly  lastName: string;
}
