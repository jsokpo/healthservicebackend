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
exports.BlogController = void 0;
const blog_service_1 = require("../services/blog.service");
exports.BlogController = {
    createBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const { title, content } = req.body;
            const image = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || '';
            // ✅ Pull userId from authenticated user
            const userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized: user ID missing' });
            }
            const blog = yield blog_service_1.BlogService.createBlog({
                title,
                content,
                image,
                userId,
                doctorId: req.body.doctorId || undefined,
            });
            res.status(201).json(blog);
        }
        catch (error) {
            res.status(500).json({ message: 'Failed to create blog', error });
        }
    }),
    getAllBlogs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield blog_service_1.BlogService.getAllBlogs(req.query);
        res.json(result);
    }),
    getSingleBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const blog = yield blog_service_1.BlogService.getSingleBlog(req.params.id);
        if (!blog)
            return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    }),
    updateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { title, content } = req.body;
        const data = { title, content };
        if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path)
            data.image = req.file.path;
        const blog = yield blog_service_1.BlogService.updateBlog(req.params.id, data);
        res.json(blog);
    }),
    deleteBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield blog_service_1.BlogService.deleteBlog(req.params.id);
        res.status(204).send();
    }),
};
