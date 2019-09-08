import { Document } from 'mongoose';

export interface UserDoc extends Document  {
    id: string;
    username: string;
    email: string;
    password: string;
<<<<<<< HEAD
    role: string;
=======
    roleOfUser: string;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    created: Date;
    confirmPassword: boolean;
}
