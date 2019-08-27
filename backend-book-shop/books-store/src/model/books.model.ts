import { Books } from 'src/model/books.model';
export interface Books {
    id: string;
    title: string;
    description: string;
    authors: any[];
    coast: string;
}
