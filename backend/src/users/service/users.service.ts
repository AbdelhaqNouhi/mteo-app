import { UsersModule } from './../users.module';
import { CreateUserDto } from './../dtos/CreateUser.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from '../Schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UsersModule: Model<UserDocument>) {}

    async CreateUser(CreateUserDto: CreateUserDto): Promise<User> {
        const CreateUser = await new this.UsersModule(CreateUserDto);
        return CreateUser.save();
    }

    async GetAllUser(): Promise<User[]> {

        const UserData = await this.UsersModule.find().exec();
        if(!UserData || UserData.length == 0) {
            throw new NotFoundException('Users data not found!');
        }
        return UserData;
    }
}
