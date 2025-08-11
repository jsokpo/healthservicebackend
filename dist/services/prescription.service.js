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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionService = void 0;
const client_1 = require("../prisma/client");
exports.PrescriptionService = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.findMany();
    }),
    getOne: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.findUnique({ where: { id } });
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.create({ data });
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.update({
            where: { id },
            data
        });
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.delete({ where: { id } });
    }),
    getByDoctor: (doctorId) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.findMany({ where: { doctorId } });
    }),
    getByPatient: (patientId) => __awaiter(void 0, void 0, void 0, function* () {
        return client_1.prisma.prescription.findMany({ where: { patientId } });
    }),
    updateWithAppointment: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, appointmentId } = data, rest = __rest(data, ["id", "appointmentId"]);
        return client_1.prisma.prescription.update({
            where: { id },
            data: Object.assign(Object.assign({}, rest), { appointmentId })
        });
    })
};
