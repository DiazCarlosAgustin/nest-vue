import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { countryEnum, stateEnum } from 'src/Enums/Enums';
import { CreateAddressDto } from './create-address.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {

    @IsString()
    @IsOptional()
    alias: string

    @IsString()
    @IsOptional()
    name: string

    @IsOptional()
    @IsString()
    last_name: string

    @IsOptional()
    @IsNumber()
    dni: number

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsString()
    zip: string

    @IsOptional()
    @IsString()
    city: string

    @IsOptional()
    @IsEnum(countryEnum, { each: true })
    country: countryEnum

    @IsOptional()
    @IsEnum(stateEnum, { each: true })
    state: stateEnum

    @IsOptional()
    @IsNumber()
    phone: number

    @IsOptional()
    @MaxLength(2000)
    @IsString()
    other: string

}
