"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const timeSlot_controller_1 = require("../controllers/timeSlot.controller");
const router = express_1.default.Router();
router.post('/create', timeSlot_controller_1.TimeSlotController.create);
router.get('/', timeSlot_controller_1.TimeSlotController.getAll);
router.get('/:id', timeSlot_controller_1.TimeSlotController.getById);
router.get('/doctor-review/:id', timeSlot_controller_1.TimeSlotController.getDoctorTimeSlot);
router.get('/appointment-time/:id', timeSlot_controller_1.TimeSlotController.getAppointmentTime);
router.patch('/', timeSlot_controller_1.TimeSlotController.update);
router.delete('/', timeSlot_controller_1.TimeSlotController.deleteAll);
exports.default = router;
