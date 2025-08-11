"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favourite_controller_1 = require("../controllers/favourite.controller");
const router = (0, express_1.Router)();
router.post('/add', favourite_controller_1.FavouriteController.addFavourite);
router.post('/remove', favourite_controller_1.FavouriteController.removeFavourite);
router.get('/', favourite_controller_1.FavouriteController.getFavourite);
exports.default = router;
