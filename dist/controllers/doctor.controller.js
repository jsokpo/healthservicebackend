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
exports.DoctorController = void 0;
const doctor_service_1 = require("../services/doctor.service");
exports.DoctorController = {
    signUp: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield doctor_service_1.DoctorService.register(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Doctor registration failed", error });
        }
    }),
    getAllDoctors: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield doctor_service_1.DoctorService.getAllDoctors(req.query);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to fetch doctors", error });
        }
    }),
    getDoctorById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const doctor = yield doctor_service_1.DoctorService.getDoctorById(req.params.id);
            if (!doctor)
                return res.status(404).json({ message: "Doctor not found" });
            res.json(doctor);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to fetch doctor", error });
        }
    }),
    updateDoctor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, bio, specialization } = req.body;
            const updateData = { name, bio, specialization };
            if (req.file)
                updateData.profileImg = req.file.path;
            const doctor = yield doctor_service_1.DoctorService.updateDoctor(req.params.id, updateData);
            res.json(doctor);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to update doctor", error });
        }
    }),
};
