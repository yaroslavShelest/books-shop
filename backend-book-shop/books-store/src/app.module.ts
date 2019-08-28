// Main
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/common/guards/auth.guard';

// Controllers
import { AuthController, BooksController, UsersController, AuthorsController } from 'src/controllers/index';

// Services
import { AuthService, BooksService, UsersService, AuthorsService } from 'src/services/index';

// Provaiders
import { DatabaseProviders } from 'src/providers/data.base.provaiders';
import { BooksProviders } from 'src/providers/books.provaiders';
import { UsersProviders } from 'src/providers/users.provaiders';
import { AuthorProviders } from 'src/providers/authors.provaiders';

// Repositories
import { BooksRepository } from 'src/repozitories/repozitories.books';
import { UserRepository } from 'src/repozitories/repozitories.users';
import { AuthorRepository } from 'src/repozitories/repozitories.authors';

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
        expiresIn: '600s',

      },
    }),
  ],
  controllers: [
                AuthorsController,
                AuthController,
                BooksController,
                UsersController],
  providers:   [
               {
                provide: APP_GUARD,
                useClass: RolesGuard,
                },
                AuthService,
                AuthorsService,
                BooksService,
                UsersService,
                BooksRepository,
                UserRepository,
                AuthorRepository,
                LocalStrategy,
                JwtStrategy,
                ...DatabaseProviders,
                ...BooksProviders,
                ...UsersProviders,
                ...AuthorProviders,
                ],
})
export class AppModule {}
