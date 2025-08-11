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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotService = void 0;
const client_1 = require("../prisma/client");
exports.TimeSlotService = {
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.create({ data });
    }),
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.findMany();
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.findUnique({ where: { id } });
    }),
    findByDoctor: (doctorId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.findMany({ where: { doctorId } });
    }),
    findAppointmentTime: (doctorId, day) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.findMany({
            where: {
                doctorId,
                day
            }
        });
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.update({
            where: { id },
            data
        });
    }),
    deleteAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.timeSlot.deleteMany();
    })
};
