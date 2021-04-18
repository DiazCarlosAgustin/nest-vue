import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { Category } from '../entities/category.entity'
export class CreateCategoryDto {
    @IsString()
    name!: string

    @IsNumber()
    @IsOptional()
    id_parent?: number

    @IsString()
    @MaxLength(2000)
    description: string

}
