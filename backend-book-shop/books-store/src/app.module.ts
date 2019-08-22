// Main
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/strategy';

//Controllers
import { AuthController, BooksController,UsersController,AuthorsController } from 'src/controllers/index';
//Services
import { AuthService,BooksService,UsersService, AuthorsService } from 'src/services/index';
//Schemas
// import { BooksSchema, UsersSchema } from 'src/documents/schemas/index';
// import config from "src/environments/config/keys";
//Provaiders
import { DatabaseProviders } from 'src/provaiders/data.base.provaiders';
import { BooksProviders } from 'src/provaiders/books.provaiders';
import { UsersProviders } from 'src/provaiders/users.provaiders'

// Repositories
import { BooksRepository } from 'src/repozitories/repozitories.books'
import { UserRepository } from 'src/repozitories/repozitories.users'




@Module({
  imports: 
   [ PassportModule.register({ defaultStrategy: 'jwt' })
  

  //     MongooseModule.forRoot(config.mongoURI , { useNewUrlParser: true }),
  //     MongooseModule.forFeature([
  //     { name: 'Books', schema: BooksSchema },
  //     { name: 'Users', schema: UsersSchema }
  //   ]
  // )
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
                BooksRepository,
                UserRepository,
                LocalStrategy,
                ...DatabaseProviders,
                ...BooksProviders,
                ...UsersProviders
                ]
}) 
export class AppModule {}
