<<<<<<< HEAD
import { ApiModelProperty } from '@nestjs/swagger';

export class JwtPayload {
    @ApiModelProperty()
    readonly username: string;
    @ApiModelProperty()
=======
export interface JwtPayload {
    readonly username: string;
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
    readonly role: string;
}
