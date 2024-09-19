import { PrismaClient } from '@prisma/client';
import express, { Request, Response, Router } from "express"
const prisma = new PrismaClient();

export const userRouter = express.Router();

console.log("Entered user section");


userRouter.post('/',async (req: Request, res: Response) => {
    const {name} = req.body;
    
    try {
        const newUser = await prisma.users.create({
            data : {
                name 
            }
        })
        // console.log("user created: ", newUser);
        res.json({newUser})
        // return newUser
        
    } catch (e) {
        console.error('Error creating user:', e);
        throw new Error('Failed to create user');
    }
})

userRouter.get('/', async(req,res) =>{
    const response = await prisma.users.findMany({})
    console.log(response);
    res.json({response})
    // return response;
    
})
