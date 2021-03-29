import { IsNumber, IsString, IsEmail, IsBoolean, IsDate } from "class-validator"
import { PrimaryGeneratedColumn, Column, Entity, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
@Unique(["email"])
export class User {
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @Column()
    name: string

    @IsString()
    @Column()
    last_name: string

    @IsEmail()
    @Column()
    email: string

    @IsString()
    @Column()
    password: string

    @IsBoolean()
    @Column({ default: true })
    active: boolean

    @IsBoolean()
    @Column({ default: false })
    validated: boolean

    @IsString()
    @Column()
    reset_password_token: string

    @IsDate()
    @CreateDateColumn()
    created_at: Date

    @IsDate()
    @UpdateDateColumn()
    updated_at: Date
}
