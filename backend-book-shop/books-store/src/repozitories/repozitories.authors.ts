import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { AuthorDoc } from 'src/documents/documentMongo/doc.authors';

@Injectable()
export class AuthorRepository {
  constructor(
    @Inject('AUTHOR_MODEL')
    private readonly authorModel: Model<AuthorDoc>,
  ) {}

}
