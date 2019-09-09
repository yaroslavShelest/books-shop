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
    role: string;
    @ApiModelProperty()
    created: Date;
    @ApiModelProperty()
    confirmPassword: boolean;
}

export interface CreateUser {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly created: Date;
    readonly confirmPassword?: boolean;
}
