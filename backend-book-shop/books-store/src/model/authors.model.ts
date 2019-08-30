import { ApiModelProperty } from '@nestjs/swagger';

export class Authors {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    firstName: string;
    @ApiModelProperty()
    lastName: string;
}
