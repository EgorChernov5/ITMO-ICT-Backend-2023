import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import {Portfolio} from "./Portfolio";

@Entity("user_c")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToMany(() => Portfolio, (portfolio) => portfolio.id_user)
    portfolios: Portfolio[]

    @Column({
        type: "character varying",
        length: 20
    })
    name: string

    @Column({
        type: "character varying",
        length: 20
    })
    surname: string

    @Column({
        type: "character varying",
        length: 20,
        nullable: true
    })
    phone: string

    @Column({
        type: "character varying",
        length: 20,
        unique: true
    })
    email: string

    @Column({
        type: "character varying",
        length: 50
    })
    password: string
}