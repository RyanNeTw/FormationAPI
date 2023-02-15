import { appendFile } from "fs"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import authRoute from "./routes/auth"
import { registerUser } from "./controllers/userController"

var bodyParser = require('body-parser')

const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

AppDataSource.initialize().then(async () => {

    app.post('/',jsonParser, function(req, res){
        registerUser(req, res)
    })


    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log(users)

    app.use(authRoute)

    app.listen(8000)
}).catch(error => console.log(error))
