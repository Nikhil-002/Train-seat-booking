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
exports.userRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
exports.userRouter = express_1.default.Router();
console.log("Entered user section");
exports.userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const newUser = yield prisma.users.create({
            data: {
                name
            }
        });
        // console.log("user created: ", newUser);
        res.json({ newUser });
        // return newUser
    }
    catch (e) {
        console.error('Error creating user:', e);
        throw new Error('Failed to create user');
    }
}));
exports.userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.users.findMany({});
    console.log(response);
    res.json({ response });
    // return response;
}));
