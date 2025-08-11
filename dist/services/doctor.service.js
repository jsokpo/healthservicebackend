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
exports.DoctorService = void 0;
const client_1 = require("../prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.DoctorService = {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
            const user = yield client_1.prisma.user.create({
                data: {
                    email: data.email,
                    password: hashedPassword,
                    role: 'doctor',
                }
            });
            return user;
        });
    },
    getAllDoctors(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = parseInt(query.page) || 1;
            const limit = parseInt(query.limit) || 10;
            const skip = (page - 1) * limit;
            const [data, total] = yield Promise.all([
                client_1.prisma.doctor.findMany({
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' }
                }),
                client_1.prisma.doctor.count()
            ]);
            return {
                data,
                meta: { page, limit, total }
            };
        });
    },
    getDoctorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.prisma.doctor.findUnique({
                where: { id }
            });
        });
    },
    updateDoctor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.prisma.doctor.update({
                where: { id },
                data
            });
        });
    }
};
