import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
   }],
//    books: [],

});
// const AuthorModel = mongoose.model('Author', AuthorSchema,'authors');

// module.exports = AuthorModel;
