"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coachRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
exports.coachRouter = express_1.default.Router();
console.log("Entered Coach section");
exports.coachRouter.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params['id'];
    const { total_seat } = req.body;
    if (total_seat > 7) {
        throw new Error("Can't book more than 7 seats at once.");
    }
    const availaibleSeats = yield prisma.coach.findMany({
        where: {
            booked: false
        },
        orderBy: [
            { row_no: 'asc' },
            { seat_no: 'asc' }
        ],
        take: Number(total_seat)
    });
    console.log({ availaibleSeats });
    if (availaibleSeats.length < total_seat) {
        throw new Error("Not enough seats available");
    }
    const bookSeat = yield prisma.coach.updateMany({
        where: {
            id: {
                in: availaibleSeats.map((seat) => {
                    return seat.id;
                })
            },
        },
        data: {
            booked: true,
            user_id: Number(userId)
        }
    });
    console.log({ bookSeat });
    res.json({ availaibleSeats });
    // const booked_seat = await prisma.coach.findMany({
    //     where :{
    //         booked : true
    //     }
    // })
    // console.log({booked_seat});
    // res.json({bookSeat})
    // res.json({bookSeat})
}));
exports.coachRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const total_seat = yield prisma.coach.findMany({
        where: {
            booked: true
        }
    });
    console.log({ total_seat });
    res.json({ total_seat });
}));
exports.coachRouter.delete('/', (req, res) => {
});
