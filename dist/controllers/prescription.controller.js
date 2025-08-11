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
exports.PrescriptionController = void 0;
const prescription_service_1 = require("../services/prescription.service");
exports.PrescriptionController = {
    getAll: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.getAll();
        res.json(data);
    }),
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.getOne(req.params.id);
        res.json(data);
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.create(req.body);
        res.status(201).json(data);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.update(req.params.id, req.body);
        res.json(data);
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.delete(req.params.id);
        res.json({ message: 'Deleted', data });
    }),
    updateWithAppointment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prescription_service_1.PrescriptionService.updateWithAppointment(req.body);
        res.json(data);
    }),
    getByDoctor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'Unauthorized: user not found' });
        }
        const doctorId = req.user.id;
        const data = yield prescription_service_1.PrescriptionService.getByDoctor(doctorId);
        res.json(data);
    }),
    getByPatient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'Unauthorized: user not found' });
        }
        const patientId = req.user.id;
        const data = yield prescription_service_1.PrescriptionService.getByPatient(patientId);
        res.json(data);
    }),
};
