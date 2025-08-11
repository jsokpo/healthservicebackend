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
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.AuthController = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const result = yield auth_service_1.AuthService.login(email, password);
        res.json(result);
    }),
    resetPassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email } = req.body;
        const result = yield auth_service_1.AuthService.resetPassword(email);
        res.json(result);
    }),
    confirmReset: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { token, newPassword } = req.body;
        const result = yield auth_service_1.AuthService.confirmReset(token, newPassword);
        res.json(result);
    })
};
