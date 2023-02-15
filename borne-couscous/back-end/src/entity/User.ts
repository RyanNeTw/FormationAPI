import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
// import { Article } from "./Article"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: String

    // @Column()
    // firstname: string

    // @Column()
    // lastname: string

    @Column()
    email: string

    @Column()
    password: string

    // @Column()
    // password_verif: string

    // @Column()
    // birthdate: string

    // @CreateDateColumn()
    // created_at: Date

    // @UpdateDateColumn()
    // updated_at: Date

    // @OneToMany(() => Article, (article) => article.user)
    // articles: Article[]
}
