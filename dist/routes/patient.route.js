"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// patient.route.ts
const express_1 = require("express");
const patient_controller_1 = require("../controllers/patient.controller");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
// Multer config
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: (_, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage });
router.post('/', patient_controller_1.PatientController.signUp);
router.get('/:id', patient_controller_1.PatientController.get);
router.patch('/:id', upload.single('avatar'), patient_controller_1.PatientController.update);
exports.default = router;
