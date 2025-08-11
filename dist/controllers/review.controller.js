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
exports.ReviewController = void 0;
const review_service_1 = require("../services/review.service");
exports.ReviewController = {
    getAllReviews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const reviews = yield review_service_1.ReviewService.getAll(req.query);
        res.json(reviews);
    }),
    getReviewById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const review = yield review_service_1.ReviewService.getById(req.params.id);
        res.json(review);
    }),
    getDoctorReviews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const reviews = yield review_service_1.ReviewService.getDoctorReviews(req.params.id);
        res.json(reviews);
    }),
    createReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const review = yield review_service_1.ReviewService.create(req.body);
        res.status(201).json(review);
    }),
    updateReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield review_service_1.ReviewService.update(req.params.id, req.body);
        res.json(updated);
    }),
    replyReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield review_service_1.ReviewService.reply(req.params.id, req.body.reply);
        res.json(updated);
    }),
    deleteReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const deleted = yield review_service_1.ReviewService.delete(req.params.id);
        res.json(deleted);
    })
};
