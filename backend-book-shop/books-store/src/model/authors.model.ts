import { ApiModelProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class Authors {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    firstName: string;
    @ApiModelProperty()
    lastName: string;
    @ApiModelProperty()
    books: any[];
}

export interface CreateAuthors {
    readonly firstName: string;
    readonly lastName: string;
    readonly books: [mongoose.Schema.Types.ObjectId];
}
