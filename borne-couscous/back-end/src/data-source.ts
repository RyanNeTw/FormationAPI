import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
// import { Categorie } from "./entity/Categorie"
// import { Article } from "./entity/Article"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "CouscousBorne",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
//    entities: [User, Article, Categorie],