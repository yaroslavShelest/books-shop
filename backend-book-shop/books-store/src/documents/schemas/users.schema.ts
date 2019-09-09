import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    created: { type: Date, default: Date.now },
    confirmPassword: Boolean,
});
