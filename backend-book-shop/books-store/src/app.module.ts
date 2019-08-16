// Main
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//Controllers
import { AppController } from './app.controller';
import { AuthController, BooksController,UsersController,AuthorsController } from 'src/controllers/index';
//Services
import { AppService } from './app.service';
import { AuthService,BooksService,UsersService, AuthorsService } from 'src/services/index';
//Schemas
import { BooksSchema, UsersSchema } from 'src/documents/schemas/index';
import config from "src/environments/config/keys";

@Module({
  imports:  [MongooseModule.forRoot(config.mongoURI , { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Books', schema: BooksSchema },
      { name: 'Users', schema: UsersSchema }
    ]
  )
  ],
  controllers: [
                AppController,
                AuthorsController,
                AuthController,
                BooksController,
                UsersController],
  providers:   [
                AppService,
                AuthService,
                AuthorsService,
                BooksService,
                UsersService],
}) 
export class AppModule {}
