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
exports.BlogService = void 0;
const client_1 = require("../prisma/client");
exports.BlogService = {
    createBlog: (data) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return yield client_1.prisma.blog.create({
            data: {
                title: data.title,
                content: data.content,
                image: data.image,
                userId: data.userId,
                doctorId: (_a = data.doctorId) !== null && _a !== void 0 ? _a : null
            }
        });
    }),
    getAllBlogs: (query) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const [blogs, total] = yield Promise.all([
            client_1.prisma.blog.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' }
            }),
            client_1.prisma.blog.count()
        ]);
        return {
            data: blogs,
            meta: { total, page, limit }
        };
    }),
    getSingleBlog: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.blog.findUnique({ where: { id } });
    }),
    updateBlog: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.blog.update({ where: { id }, data });
    }),
    deleteBlog: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.blog.delete({ where: { id } });
    })
};
