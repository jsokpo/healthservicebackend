import { prisma } from '../prisma/client';

export const FavouriteService = {
  addFavourite: async ({
    userId,
    itemId,
    itemType,
  }: {
    userId: string;
    itemId: string;
    itemType: string;
  }) => {
    return await prisma.favourite.create({
      data: { userId, itemId, itemType },
    });
  },

  removeFavourite: async ({
    userId,
    itemId,
  }: {
    userId: string;
    itemId: string;
  }) => {
    return await prisma.favourite.deleteMany({
      where: { userId, itemId },
    });
  },

  getFavourites: async (userId: string) => {
    return await prisma.favourite.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  },
};

