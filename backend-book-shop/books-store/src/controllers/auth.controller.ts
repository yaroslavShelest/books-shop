<<<<<<< HEAD
import { Controller, UseGuards, Post, Request, Get, Body  } from '@nestjs/common';
import { CreateUser } from 'src/model/users.model';
=======
import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
import { AuthGuard } from '@nestjs/passport';
import { AuthService , UsersService } from 'src/services/index';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('auth')
@ApiBearerAuth()

@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  @ApiResponse({ status: 201, description: 'The TOKENS has been successfully fetched.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async login(@Request() req) {
    return this.authService.getToken(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiResponse({ status: 201, description: 'The TOKENS has been successfully fetched.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  getProfile(@Request() req) {
    return req.user;
  }
<<<<<<< HEAD

  @ApiResponse({ status: 201, description: 'successfully register user.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post('register')
  async regiser(@Body() user: CreateUser): Promise<CreateUser> {
    return await this.userService.create(user);
  }
=======
>>>>>>> 7acf8d3a9bc63cda603c9a9e1a33156cdd03e9b0
}
