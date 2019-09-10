// Main
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Controllers
import { AuthController, BooksController, UsersController, AuthorsController } from 'src/controllers/index';

// Services
import { AuthService, BooksService, UsersService, AuthorsService } from 'src/services/index';

// Provaiders
import { DatabaseProviders , BooksProviders , UsersProviders , AuthorProviders } from 'src/common/providers/index';

// Repositories
import { BooksRepository , UserRepository , AuthorRepository } from 'src/repozitories/index';

// jwt
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { jwtConstants } from 'src/common/strategy/constants';
import { JwtModule } from '@nestjs/jwt';
// config
import { ConfigService } from 'src/environments/config/config.service';

@Module({
  imports:
   [ PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '950s',
      },
    }),
  ],
  controllers: [
                AuthorsController,
                AuthController,
                BooksController,
                UsersController],
  providers:   [
                // {
                //   provide: ConfigService,
                //   useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
                // },
                AuthService,
                AuthorsService,
                BooksService,
                UsersService,
                BooksRepository,
                UserRepository,
                AuthorRepository,
                JwtStrategy,
                ...DatabaseProviders,
                ...BooksProviders,
                ...UsersProviders,
                ...AuthorProviders,
                ],
})
export class AppModule {}
