import { AuthGuard } from './../guard/auth/auth.guard';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../pipes/validate-user/validate-user.pipe';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(AuthGuard)
    CreateUser(@Body()  userData: CreateUserDto) {
        return this.userService.CreateUser(userData);
    }

    @Get()
    GetAllUsers() {
        return this.userService.GetAllUser();
    }

    // @Get(':id')
    // async getUserById(
    //     @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
    //     id: number,
    // ) {
    //     return this.userService.fetchUserById(id)
    // }
} 