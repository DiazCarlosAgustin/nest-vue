import { IsEnum, IsNumber, IsString, MaxLength } from "class-validator";
import { countryEnum, stateEnum } from "src/Enums/Enums";

export class CreateAddressDto {
    @IsString()
    alias: string

    @IsNumber()
    id_user: number

    @IsString()
    name: string

    @IsString()
    last_name: string

    @IsNumber()
    dni: number

    @IsString()
    address: string

    @IsString()
    zip: string

    @IsString()
    city: string

    @IsEnum(countryEnum, { each: true })
    country: countryEnum

    @IsEnum(stateEnum, { each: true })
    state: stateEnum

    @IsNumber()
    phone: number

    @MaxLength(2000)
    @IsString()
    other: string
}
