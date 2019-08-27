import { Document } from 'mongoose';

export interface UserDoc extends Document  {
    id: string;
    username: string;
    email: string;
    password: string;
    typeOfUser: string;
    created: Date;
}
