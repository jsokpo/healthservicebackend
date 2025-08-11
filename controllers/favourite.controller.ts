import { Request, Response } from 'express';
import { FavouriteService } from '../services/favourite.service';

export const FavouriteController = {
  addFavourite: async (req: Request, res: Response) => {
    const favourite = await FavouriteService.addFavourite(req.body);
    res.status(201).json(favourite);
  },

  removeFavourite: async (req: Request, res: Response) => {
    const removed = await FavouriteService.removeFavourite(req.body);
    res.json({ message: 'Removed from favourites', removed });
  },

  getFavourite: async (req: Request, res: Response) => {
    const userId = req.query.userId as string;
    const favourites = await FavouriteService.getFavourites(userId);
    res.json(favourites);
  },
};
