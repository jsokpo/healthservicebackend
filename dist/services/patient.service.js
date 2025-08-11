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
exports.PatientService = void 0;
const client_1 = require("../prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.PatientService = {
    /**
     * Register a new patient (creates a user with role 'patient')
     */
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
            const user = yield client_1.prisma.user.create({
                data: {
                    email: data.email,
                    password: hashedPassword,
                    role: 'patient',
                },
            });
            return user;
        });
    },
    /**
     * Get a patient by ID
     */
    getPatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.prisma.patient.findUnique({ where: { id } });
        });
    },
    /**
     * Update patient details
     */
    updatePatient(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return client_1.prisma.patient.update({
                where: { id },
                data
            });
        });
    }
};
