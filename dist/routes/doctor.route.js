"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// doctor.route.ts
const express_1 = require("express");
const doctor_controller_1 = require("../controllers/doctor.controller");
const upload_1 = require("../middlewares/upload");
const router = (0, express_1.Router)();
router.get('/', doctor_controller_1.DoctorController.getAllDoctors);
router.get('/:id', doctor_controller_1.DoctorController.getDoctorById);
router.patch('/:id', upload_1.upload.single('profileImg'), doctor_controller_1.DoctorController.updateDoctor);
router.post('/', doctor_controller_1.DoctorController.signUp);
exports.default = router;
