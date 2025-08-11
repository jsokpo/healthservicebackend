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
exports.ReviewService = void 0;
const client_1 = require("../prisma/client");
exports.ReviewService = {
    getAll: (filters) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.findMany({
            where: filters, // pass filters directly if shape matches Prisma's where input
        });
    }),
    getById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.findUnique({ where: { id } });
    }),
    getDoctorReviews: (doctorId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.findMany({ where: { doctorId } });
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.create({ data });
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.update({
            where: { id },
            data
        });
    }),
    reply: (id, reply) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.update({
            where: { id },
            data: { reply }
        });
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.review.delete({ where: { id } });
    })
};
