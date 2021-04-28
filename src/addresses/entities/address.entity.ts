import { Max, Min } from "class-validator"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("address")
export class Address {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: "id_user" })
    id_user: User | number

    @Column({ nullable: false })
    alias: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    last_name: string

    @Column({ nullable: false })
    @Min(8)
    dni: number

    @Column({ nullable: false })
    adress: string

    @Column()
    zip: string

    @Column()
    city: string

    @Column()
    id_country: number

    @Column()
    id_state: number

    @Column()
    phone: number

    @Max(2000)
    @Column()
    other: string
}
