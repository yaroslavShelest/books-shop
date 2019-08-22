import { Document } from 'mongoose';

export interface Book extends Document {
  readonly  id?: string;
  readonly  title?: string;
  readonly  descriptio?: string;
  readonly  authors?: any[];
  readonly  coast?: string;
    
}