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
exports.AuthService = void 0;
const client_1 = require("../prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
exports.AuthService = {
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield client_1.prisma.user.findUnique({ where: { email } });
            if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
                throw new Error('Invalid credentials');
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: '7d',
            });
            return { accessToken: token };
        });
    },
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield client_1.prisma.user.findUnique({ where: { email } });
            if (!user)
                throw new Error('User not found');
            const token = (0, uuid_1.v4)();
            const expiresAt = new Date(Date.now() + 3600 * 1000); // 1 hour
            yield client_1.prisma.passwordResetToken.create({
                data: { userId: user.id, token, expiresAt },
            });
            // TODO: send token via email
            return { message: 'Reset link sent' };
        });
    },
    confirmReset(token, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield client_1.prisma.passwordResetToken.findUnique({ where: { token } });
            if (!record || record.expiresAt < new Date())
                throw new Error('Invalid/expired token');
            const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
            yield client_1.prisma.user.update({
                where: { id: record.userId },
                data: { password: hashedPassword },
            });
            yield client_1.prisma.passwordResetToken.delete({ where: { token } });
            return { message: 'Password updated' };
        });
    },
};
