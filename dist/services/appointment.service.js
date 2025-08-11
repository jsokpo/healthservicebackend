"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const client_1 = require("../prisma/client");
exports.AppointmentService = {
    create: (data) => client_1.prisma.appointment.create({ data }),
    update: (id, data) => client_1.prisma.appointment.update({
        where: { id },
        data
    }),
    findById: (id) => client_1.prisma.appointment.findUnique({ where: { id } }),
    findPatientAppointments: (patientId) => client_1.prisma.appointment.findMany({ where: { patientId } }),
    findDoctorAppointments: (doctorId) => client_1.prisma.appointment.findMany({ where: { doctorId } }),
    findDoctorPatients: (doctorId) => client_1.prisma.appointment.findMany({
        where: { doctorId },
        distinct: ['patientId'],
    }),
    // Placeholder: Replace with real invoice logic
    getInvoices: (type, id) => client_1.prisma.appointment.findMany({
        where: type === 'patient' ? { patientId: id } : { doctorId: id }
    })
};
