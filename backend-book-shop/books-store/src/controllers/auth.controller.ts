import { Controller, Post, Get, Body} from '@nestjs/common';
import { AuthService , UsersService } from 'src/services/index';
import { LoginResponse } from 'src/model/login-res.model';
import { UserLogin } from 'src/model/user-auth.model';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('auth')
@ApiBearerAuth()

@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The TOKENS has been successfully fetched.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async login(@Body() user: UserLogin): Promise<LoginResponse> {
    const loginResponse: LoginResponse = await this.authService.login(user);

    return loginResponse;
  }
}
