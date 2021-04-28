import { IsNumber, IsString, IsEmail, IsBoolean, IsDate } from "class-validator"
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import * as bcrypt from 'bcryptjs';
import { Address } from "src/addresses/entities/address.entity";
@Entity()
export class User extends BaseEntity {
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
    @Column({ unique: true })
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

    @OneToMany(() => Address, address => address.id_user)
    Address: Address[]

    async validatePassword(password: string): Promise<Boolean> {
        return await bcrypt.compare(password, this.password)
    }
}
