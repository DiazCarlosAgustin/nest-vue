import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {

    @IsNumber()
    @PrimaryGeneratedColumn()
    public id: number

    @IsString()
    @Column()
    public name: string

    // crea la clave "foranea"
    @IsNumber()
    @ManyToOne(type => Category, category => category.id)
    @JoinColumn({ name: 'id_parent' })
    id_parent: number

    @IsString()
    @Column()
    public description: string

    @IsBoolean()
    @Column({ default: true })
    public active: Boolean

    @IsDate()
    @CreateDateColumn()
    public created_at: Date

    @IsDate()
    @UpdateDateColumn()
    public updated_at: Date

    // crea la relacion entre id(categoria) y id_parent(categoria)
    @OneToMany(() => Category, category => category.id_parent)
    parent: Category[]
}
