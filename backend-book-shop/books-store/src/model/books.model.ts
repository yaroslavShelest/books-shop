import { ApiModelProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class Books {
    @ApiModelProperty()
    id?: string;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    authors: any[];
    @ApiModelProperty()
    coast: number;
}

export interface CreateBooks {
    readonly title: string;
    readonly description: string;
    readonly authors: [mongoose.Schema.Types.ObjectId];
    readonly coast: number;
}
