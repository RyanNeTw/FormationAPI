// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm"
// import { Categorie } from "./Categorie"
// import { User } from "./User"

// @Entity()
// export class Article {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     title: string

//     @Column()
//     content: string

//     @CreateDateColumn()
//     created_at: Date

//     @ManyToOne(() => Categorie, (categorie) => categorie.articles)
//     categorie: Categorie

//     @ManyToOne(() => User, (user) => user.articles)
//     user: User
// }
