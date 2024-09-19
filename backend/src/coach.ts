import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from "express"
const prisma = new PrismaClient();

export const coachRouter = express.Router();

console.log("Entered Coach section");


coachRouter.post('/:id', async(req,res) => {
    const userId = req.params['id']
    const {total_seat} = req.body;
    if(total_seat>7){
        throw new Error("Can't book more than 7 seats at once.");
    }

    const availaibleSeats = await prisma.coach.findMany({
        where : {
            booked : false
        },
        orderBy : [
            {row_no : 'asc'},
            {seat_no : 'asc'}
        ],
        take : Number(total_seat)
    })
    console.log({availaibleSeats});
    

    if(availaibleSeats.length < total_seat){
        throw new Error("Not enough seats available")
    }

    const bookSeat = await prisma.coach.updateMany({
        where : {
            id : {
                in : availaibleSeats.map((seat) => {
                    return seat.id;
                })
            },
        },
        data : {
            booked : true,
            user_id : Number(userId)
        }
    })
    console.log({bookSeat});
    res.json({availaibleSeats})
    // const booked_seat = await prisma.coach.findMany({
    //     where :{
    //         booked : true
    //     }
    // })
    // console.log({booked_seat});
    
    // res.json({bookSeat})
    
    // res.json({bookSeat})
})

coachRouter.get('/', async(req,res) => {
    const total_seat = await prisma.coach.findMany({
        where :{
            booked : true
        }
    })
    console.log({total_seat});
    
    res.json({total_seat})
})

coachRouter.delete('/', (req,res) => {

})