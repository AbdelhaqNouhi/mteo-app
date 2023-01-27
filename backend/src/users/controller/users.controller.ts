import { AuthGuard } from './../guard/auth/auth.guard';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../pipes/validate-user/validate-user.pipe';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('create')
    @UsePipes(new ValidationPipe())
    @UseGuards(AuthGuard)
    async CreateUser(@Body(ValidateUserPipe) @Res() response, userData: CreateUserDto) {

        try {
            const NewUser = await this.userService.CreateUser(userData);
            return response.status(HttpStatus.CREATED).json({message: 'User has been created successfully..',
            NewUser
        })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json ({
                statusCode: 401,
                message: 'Error: User not created!',
                error: 'Bad Request'
            });
        }
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