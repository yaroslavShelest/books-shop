import * as mongoose from 'mongoose';

export const BooksSchema = new mongoose.Schema ({
    title: String,
    description: String,
    author: [],
    coast: String,
});
