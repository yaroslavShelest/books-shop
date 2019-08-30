import { Controller, Get, Body, Post, Response, Delete, HttpStatus, Param, Put, NotFoundException, UseGuards} from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { UsersService } from 'src/services/index';
import { RolesGuard } from 'src/common/guards/auth.guard';
import { Users } from 'src/model/users.model';
import { Roles } from 'src/common/guards/roles.decorator';
import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('getAll')
    @Roles('admin')
    public getAll(): Promise<Users[]> {
        return this.usersService.getAll();
    }

    @Get('getUserById/:id')
    public getUserById(@Param('id') id: string): Promise<Users> {
        return this.usersService.getOneUser(id);
    }

    @Post('')
    @Roles('admin')
    public async addUser(@Response() res, @Body() user: Users) {
        const newUser = await this.usersService.create(user);
        return res.status(HttpStatus.OK).json({
            message: 'User has been submitted successfully!',
            post: newUser,
        });
    }

    @Put(':id')
    public async editUser(@Param('id') user: Users, @Body() id: string) {
        const users = await this.usersService.update(user , id);
        return users;
    }

    @Delete('delete/:id')
    public async deleteUser(@Param(':id') userID) {
        const users = await this.usersService.delete(userID);
        return users;
    }

    @Get('user/:username')
    public async getUserByName(@Response() res, @Param('username') user) {
        const fetchedUser = await this.usersService.findOneByUsername(user);
        if (!fetchedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json(fetchedUser);
    }
}
