import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String

});