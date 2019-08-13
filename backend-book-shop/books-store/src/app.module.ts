// Main
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//Controllers
import { AppController } from './app.controller';
import { BooksController } from '@BooksController';
import { UsersController } from '@UsersController';
//Services
import { AppService } from './app.service';
import { BooksService } from '@BooksService';
import { UsersService } from '@UsersService';
//Schemas
import { BooksSchema, UsersSchema } from '@Shemas';
import config from "@config";

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
                BooksController,
                UsersController],
  providers: [
              AppService,
              BooksService,
              UsersService],
}) 
export class AppModule {}
