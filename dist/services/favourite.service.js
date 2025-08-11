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
exports.FavouriteService = void 0;
const client_1 = require("../prisma/client");
exports.FavouriteService = {
    addFavourite: (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, itemId, itemType, }) {
        return yield client_1.prisma.favourite.create({
            data: { userId, itemId, itemType },
        });
    }),
    removeFavourite: (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, itemId, }) {
        return yield client_1.prisma.favourite.deleteMany({
            where: { userId, itemId },
        });
    }),
    getFavourites: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_1.prisma.favourite.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }),
};
