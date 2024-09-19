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
exports.fillingSeats = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const user_1 = require("./user");
const coach_1 = require("./coach");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
const options = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // You can specify allowed HTTP methods
};
app.use((0, cors_1.default)());
// Then pass these options to cors:
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
const fillingSeats = () => __awaiter(void 0, void 0, void 0, function* () {
    const seats = [];
    console.log("Initial Size: " + seats.length);
    for (let row = 1; row <= 11; row++) {
        for (let seat = 1; seat <= 7; seat++) {
            seats.push({
                row_no: row,
                seat_no: seat + ((row - 1) * 7),
                booked: false
            });
        }
    }
    for (let seat = 78; seat <= 80; seat++) {
        seats.push({
            row_no: 12,
            seat_no: seat,
            booked: false
        });
    }
    console.log("Seats Size.............. : " + seats.length);
    yield prisma.coach.createMany({
        data: seats
    });
    console.log("Seats pre-populated successfully");
    const total_seat = yield prisma.coach.findMany();
    console.log({ total_seat });
});
exports.fillingSeats = fillingSeats;
const deleteAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.coach.deleteMany({});
});
const updateSome = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.coach.updateMany({
        where: {
            seat_no: 11
        },
        data: {
            booked: true
        }
    });
});
// updateSome()
// deleteAll()
// fillingSeats();
app.use('/user', user_1.userRouter);
app.use('/booking', coach_1.coachRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
