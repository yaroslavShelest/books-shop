import * as mongoose from 'mongoose';

export const BooksSchema = new mongoose.Schema ({
    title: String,
    description: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Authors',
        }],
    coast: String,
});
//  const BookModel = mongoose.model('Books', BooksSchema,'books');

//  module.exports = BookModel;
