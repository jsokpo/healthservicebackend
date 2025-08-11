"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prescription_controller_1 = require("../controllers/prescription.controller");
const router = express_1.default.Router();
router.get('/', prescription_controller_1.PrescriptionController.getAll);
router.get('/:id', prescription_controller_1.PrescriptionController.getOne);
router.post('/create', prescription_controller_1.PrescriptionController.create);
router.patch('/:id', prescription_controller_1.PrescriptionController.update);
router.delete('/:id', prescription_controller_1.PrescriptionController.delete);
router.patch('/update-prescription-appointment', prescription_controller_1.PrescriptionController.updateWithAppointment);
router.get('/doctor/prescription', prescription_controller_1.PrescriptionController.getByDoctor);
router.get('/patient/prescription', prescription_controller_1.PrescriptionController.getByPatient);
exports.default = router;
