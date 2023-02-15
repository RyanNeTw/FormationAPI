import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
import { getManager } from 'typeorm'

export async function registerUser(req, res){
    try{
        
        const entityManager = getManager()
    
        let user = new User()

        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password

        let data = await entityManager.save(user)

        res.send({status:200, message: "Signup Successful!",data: data})
    }catch(error){
        res.status(500).json({ message: 'Error creating user', error, data: req.body });
    }
}

