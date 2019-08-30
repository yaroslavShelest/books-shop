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
    typeOfUser: string;
    @ApiModelProperty()
    createdDate: Date;
}
