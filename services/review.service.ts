import { prisma } from '../prisma/client';

export const ReviewService = {
  getAll: async (filters: any) => {
    return await prisma.review.findMany({
      where: filters,  // pass filters directly if shape matches Prisma's where input
    });
  },


  getById: async (id: string) => {
    return await prisma.review.findUnique({ where: { id } });
  },

  getDoctorReviews: async (doctorId: string) => {
    return await prisma.review.findMany({ where: { doctorId } });
  },

  create: async (data: any) => {
    return await prisma.review.create({ data });
  },

  update: async (id: string, data: any) => {
    return await prisma.review.update({
      where: { id },
      data
    });
  },

  reply: async (id: string, reply: string) => {
    return await prisma.review.update({
      where: { id },
      data: { reply }
    });
  },

  delete: async (id: string) => {
    return await prisma.review.delete({ where: { id } });
  }
};
