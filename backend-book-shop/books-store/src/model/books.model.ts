import { ApiModelProperty } from '@nestjs/swagger';
export class Books {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    authors: any[];
    @ApiModelProperty()
    coast: string;
}
