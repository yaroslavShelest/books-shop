// Main
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Controllers
import { AuthController, BooksController, UsersController, AuthorsController } from 'src/controllers/index';

// Services
import { AuthService, BooksService, UsersService, AuthorsService } from 'src/services/index';

// Provaiders
import { DatabaseProviders } from 'src/provaiders/data.base.provaiders';
import { BooksProviders } from 'src/provaiders/books.provaiders';
import { UsersProviders } from 'src/provaiders/users.provaiders';

// Repositories
import { BooksRepository } from 'src/repozitories/repozitories.books';
import { UserRepository } from 'src/repozitories/repozitories.users';

// jwt
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { jwtConstants } from 'src/strategy/constants';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'src/strategy/strategy';

@Module({
  imports:
   [ PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60s',

      },
    }),
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
                JwtStrategy,
                ...DatabaseProviders,
                ...BooksProviders,
                ...UsersProviders,
                ],
})
export class AppModule {}
