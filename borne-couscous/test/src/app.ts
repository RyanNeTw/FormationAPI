//@ts-nocheck
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from 'express'
import AuthRouter from "./routes/auth"

const { expressjwt: jwt } = require("express-jwt");

const app = express() 

AppDataSource.initialize().then(async () => {

    app.use(express.json()) //Middleware

    app.use(jwt({
        secret: "THIS IS SECRET KEY",
        algorithms: ["HS256"],
    }).unless({ path: ["/auth"] }))

    //NOTRE MIDDLEWARE
    app.use((req, res, next) => {

        if (req.auth) { // SI J'AI UN TOKEN DANS LA REQUEST
            User.findOneBy({id: req.auth.user_id}).then((user) => {
                req.user = user
            })
        } else { // SINON ON PASSE A LA SUITE AUSSI
            next()
        }

    })

    app.use((req, res, next) => {

        if (req.user) {
            
            if (req.user.status == true) {
                next()
            } else {
                res.json({
                    status: 400, 
                    message: "T'es BAN"
                })
            }

        } else {
            next()
        }

    })

    app.use(AuthRouter)

    app.listen(8000)

}).catch(error => console.log(error))