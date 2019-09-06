import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
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
}
