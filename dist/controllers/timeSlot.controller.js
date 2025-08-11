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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotController = void 0;
const timeSlot_service_1 = require("../services/timeSlot.service");
exports.TimeSlotController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        const result = yield timeSlot_service_1.TimeSlotService.create(data);
        res.status(201).json(result);
    }),
    getAll: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield timeSlot_service_1.TimeSlotService.findAll();
        res.json(result);
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield timeSlot_service_1.TimeSlotService.findById(req.params.id);
        res.json(result);
    }),
    getDoctorTimeSlot: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { doctorId } = req.query;
        const result = yield timeSlot_service_1.TimeSlotService.findByDoctor(doctorId);
        res.json(result);
    }),
    getAppointmentTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { day } = req.query;
        const result = yield timeSlot_service_1.TimeSlotService.findAppointmentTime(id, day);
        res.json(result);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const _a = req.body, { id } = _a, data = __rest(_a, ["id"]);
        const result = yield timeSlot_service_1.TimeSlotService.update(id, data);
        res.json(result);
    }),
    deleteAll: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield timeSlot_service_1.TimeSlotService.deleteAll();
        res.json(result);
    })
};
