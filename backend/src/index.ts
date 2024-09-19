import express from "express"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {userRouter}  from "./user";
import { coachRouter } from "./coach";
import cors from 'cors';

const app = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];


const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // You can specify allowed HTTP methods
  };
  
app.use(cors());

  
// Then pass these options to cors:
app.use(cors(options));

app.use(express.json());


export const fillingSeats = async() => {
    const seats = [];
    console.log("Initial Size: " + seats.length);
    

    for(let row = 1; row<=11; row++){
        for(let seat = 1; seat <= 7; seat++){
            seats.push({
                row_no : row,
                seat_no : seat + ((row-1)*7),
                booked : false
            })
        }
    }
    for(let seat = 78; seat<=80;seat++){
        seats.push({
            row_no : 12,
            seat_no : seat,
            booked : false
        })
    }
    console.log("Seats Size.............. : " + seats.length);
    

    await prisma.coach.createMany({
        data: seats
    })
    console.log("Seats pre-populated successfully");
 
    
    const total_seat = await prisma.coach.findMany()
    console.log({total_seat});
    
}

const deleteAll = async() => {
    await prisma.coach.deleteMany({});    
}

const updateSome = async() => {
    await prisma.coach.updateMany({
        where: {
            seat_no : 11
        },
        data: {
            booked : true
        }
    })
}
// updateSome()
// deleteAll()
// fillingSeats();
app.use('/user',userRouter)
app.use('/booking',coachRouter)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});








