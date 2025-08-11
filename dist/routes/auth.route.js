"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// auth.route.ts
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post('/login', auth_controller_1.AuthController.login);
router.post('/reset-password', auth_controller_1.AuthController.resetPassword);
router.post('/reset-password/confirm', auth_controller_1.AuthController.confirmReset);
exports.default = router;
