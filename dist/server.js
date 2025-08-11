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
const app_1 = __importDefault(require("./app"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 5000;
// Gracefully shut down Prisma on termination
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    process.exit(0);
}));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to database
        yield prisma.$connect();
        console.log('🟢 Connected to the database successfully');
        // Start Express server
        app_1.default.listen(PORT, () => {
            console.log(`🚀 Server running on https://healthservicebackend.onrender.com (PORT: ${PORT})`);
        });
    }
    catch (error) {
        console.error('❌ Server failed to start:', error);
        process.exit(1);
    }
});
startServer();
