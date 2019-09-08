import * as mongoose from 'mongoose';

export const BooksSchema = new mongoose.Schema ({
    title: String,
    description: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Authors',
        }],

    coast: Number,
});
