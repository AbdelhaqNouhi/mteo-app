import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../pipes/validate-user/validate-user.pipe';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateUserPipe) userData: CreateUserDto) {
        return this.userService.createUser(userData);
    }

    @Get(':id')
    async getUserById(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
        id: number,
    ) {
        return this.userService.fetchUserById(id)
    }
} 