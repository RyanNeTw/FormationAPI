import * as express from "express"
import { sha512 } from "js-sha512"
import * as jwt from "jsonwebtoken"

import { User } from "../entity/User"

const router = express.Router();

router.post("/auth", async (req, res) => {

    let user = await User.findOneBy({
        email: req.body.email,
        password: sha512(req.body.password)
    })

    if (user) {
        const token = jwt.sign({user_id: user.id }, "THIS IS SECRET KEY")
        res.json({status: 200, data: {
            token: token
        }})
    } else {
        res.json({status: 404, errors: "User not found"})
    }

})

// router.get("/users/me", async (req, res) => {
//     res.json({status: 200, data: req.user})
// })

export default router;