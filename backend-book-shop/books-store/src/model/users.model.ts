import { ApiModelProperty } from '@nestjs/swagger';

export class Users {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    username: string;
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
<<<<<<< HEAD
    role: string;
=======
    roleOfUser: string;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    @ApiModelProperty()
    created: Date;
    @ApiModelProperty()
    confirmPassword: boolean;
}
<<<<<<< HEAD

export interface CreateUser {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly confirmPassword?: boolean;
    readonly role: string;
    readonly created: Date;
}
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
