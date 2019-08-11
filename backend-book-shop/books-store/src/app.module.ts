import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth.module';
import config from './environments/config/keys';

@Module({
  imports:  [MongooseModule.forRoot(config.mongoURI , { useNewUrlParser: true }),BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
