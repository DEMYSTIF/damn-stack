import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UserDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    readonly email:string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    readonly phone:number;
}