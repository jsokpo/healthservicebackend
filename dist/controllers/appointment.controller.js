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
exports.AppointmentController = void 0;
const appointment_service_1 = require("../services/appointment.service");
// Controller object with properly typed Express handlers
exports.AppointmentController = {
    create: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const appointment = yield appointment_service_1.AppointmentService.create(req.body);
        res.status(201).json(appointment);
    })),
    update: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const updated = yield appointment_service_1.AppointmentService.update(id, req.body);
        res.json(updated);
    })),
    getById: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const appointment = yield appointment_service_1.AppointmentService.findById(id);
        res.json(appointment);
    })),
    getPatientAppointments: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const patientId = req.user.id; // Non-null assertion
        const appointments = yield appointment_service_1.AppointmentService.findPatientAppointments(patientId);
        res.json(appointments);
    })),
    getDoctorAppointments: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const doctorId = req.user.id;
        const appointments = yield appointment_service_1.AppointmentService.findDoctorAppointments(doctorId);
        res.json(appointments);
    })),
    getDoctorPatients: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const doctorId = req.user.id;
        const patients = yield appointment_service_1.AppointmentService.findDoctorPatients(doctorId);
        res.json(patients);
    })),
    getInvoices: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const role = req.user.role; // Narrow type
        const invoices = yield appointment_service_1.AppointmentService.getInvoices(role, userId);
        res.json(invoices);
    })),
    track: ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.body;
        const appointment = yield appointment_service_1.AppointmentService.findById(id);
        res.json(appointment);
    })),
};
