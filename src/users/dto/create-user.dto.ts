import { IsEmail, IsNumber, IsString, IsBoolean, IsDate } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    last_name: string

    @IsEmail()
    email: string

    @IsString()
    password: string | any

}
