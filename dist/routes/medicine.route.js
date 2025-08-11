"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/medicine.route.ts
const express_1 = require("express");
const medicine_controller_1 = require("../controllers/medicine.controller");
const router = (0, express_1.Router)();
router.post('/', medicine_controller_1.MedicineController.create);
router.patch('/', medicine_controller_1.MedicineController.update);
router.delete('/:id', medicine_controller_1.MedicineController.delete);
exports.default = router;
