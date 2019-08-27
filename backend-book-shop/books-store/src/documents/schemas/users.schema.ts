import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username: String,
    password: String,
    typeOfUser: String,
    created: { type: Date, default: Date.now },
})
