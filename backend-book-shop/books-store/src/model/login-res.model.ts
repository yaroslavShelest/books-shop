<<<<<<< HEAD
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginResponse {
    @ApiModelProperty()
    readonly username: string;
    @ApiModelProperty()
    readonly role: string;
    @ApiModelProperty()
=======
export interface LoginResponse {
    readonly username: string;
    readonly role: string;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    readonly token: string;
}
