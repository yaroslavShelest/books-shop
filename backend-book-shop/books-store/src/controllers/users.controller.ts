import { Controller, Get, Body, Post, Response, Delete, HttpStatus, Param, Put, NotFoundException, UseGuards} from '@nestjs/common';
import { UsersService } from 'src/services/index';
import { RolesGuard } from 'src/common/guards/auth.guard';
import { Users } from 'src/model/users.model';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('users')
@ApiBearerAuth()

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('getAll')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    // @Roles('admin')
    public getAll(): Promise<Users[]> {
        return this.usersService.getAll();
    }

    @Get('getUserById/:id')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @Roles('admin')
    public getUserById(@Param('id') id: string): Promise<Users> {
        return this.usersService.getOneUser(id);
    }

    @Post('')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    // @Roles('admin')
    public async addUser(@Response() res, @Body() user: Users) {
        const newUser = await this.usersService.create(user);
        return res.status(HttpStatus.OK).json({
            message: 'User has been submitted successfully!',
            post: newUser,
        });
    }

    @Put(':id')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    // @Roles('admin')
    public async editUser(@Param('id') user: Users, @Body() id: string) {
        const users = await this.usersService.update(user , id);
        return users;
    }

    @Delete('delete/:id')
    // @Roles('admin')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async deleteUser(@Param(':id') userID) {
        const users = await this.usersService.delete(userID);
        return users;
    }

    @Get('user/:username')
    @ApiResponse({ status: 201, description: 'The users has been successfully fetched.', type: Users})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async getUserByName(@Response() res, @Param('username') user) {
        const fetchedUser = await this.usersService.findOneByUsername(user);
        if (!fetchedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json(fetchedUser);
    }
}
