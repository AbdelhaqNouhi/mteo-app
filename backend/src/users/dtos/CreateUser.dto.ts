import { IsEmail ,IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    firstName: String;
    
    @IsNotEmpty()
    lastName: String;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    password: string;
}