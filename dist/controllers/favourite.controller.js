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
exports.FavouriteController = void 0;
const favourite_service_1 = require("../services/favourite.service");
exports.FavouriteController = {
    addFavourite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const favourite = yield favourite_service_1.FavouriteService.addFavourite(req.body);
        res.status(201).json(favourite);
    }),
    removeFavourite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const removed = yield favourite_service_1.FavouriteService.removeFavourite(req.body);
        res.json({ message: 'Removed from favourites', removed });
    }),
    getFavourite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const favourites = yield favourite_service_1.FavouriteService.getFavourites(userId);
        res.json(favourites);
    }),
};
