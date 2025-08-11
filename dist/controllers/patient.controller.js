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
exports.PatientController = void 0;
const patient_service_1 = require("../services/patient.service");
exports.PatientController = {
    signUp: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield patient_service_1.PatientService.register(req.body);
        res.status(201).json(user);
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        // your get logic
        res.status(200).json({ id, name: 'John Doe' });
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const avatar = req.file;
        // your update logic
        res.status(200).json({ message: 'Patient updated', id, avatar });
    })
};
