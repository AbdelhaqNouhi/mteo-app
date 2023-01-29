import { UsersModule } from './../users.module';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { User, UserDocument } from '../Schema/users.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { hashPassword } from '../utiles/bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModule: Model<UserDocument>) {}

    async CreateUser(userData: CreateUserDto) {
        const hashedPassword = hashPassword(userData.password);
        const newUser = new this.UserModule({ ...userData, password: hashedPassword });
        return await newUser.save();
    }

    async GetAllUser() {
        const UserData = await this.UserModule.find().exec();
        if(!UserData || UserData.length == 0) {
            throw new NotFoundException('Users data not found!');
        }
        return UserData;
    }
}