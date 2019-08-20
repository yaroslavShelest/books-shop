// Main
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//Controllers
import { AuthController, BooksController,UsersController,AuthorsController } from 'src/controllers/index';
//Services
import { AuthService,BooksService,UsersService, AuthorsService } from 'src/services/index';
//Schemas
import { BooksSchema, UsersSchema } from 'src/documents/schemas/index';
import config from "src/environments/config/keys";
//Provaiders
import { DatabaseProviders } from 'src/provaiders/data.base.provaiders';

@Module({
  imports:  [MongooseModule.forRoot(config.mongoURI , { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Books', schema: BooksSchema },
      { name: 'Users', schema: UsersSchema }
    ]
  )
  ],
  controllers: [
                AuthorsController,
                AuthController,
                BooksController,
                UsersController],
  providers:   [
                AuthService,
                AuthorsService,
                BooksService,
                UsersService,
                ...DatabaseProviders
                ]
}) 
export class AppModule {}
