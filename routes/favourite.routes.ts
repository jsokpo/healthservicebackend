import { Router } from 'express';
import { FavouriteController } from '../controllers/favourite.controller';

const router = Router();

router.post('/add', FavouriteController.addFavourite);
router.post('/remove', FavouriteController.removeFavourite);
router.get('/', FavouriteController.getFavourite);

export default router;
