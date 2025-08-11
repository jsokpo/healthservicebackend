// services/medicine.service.ts
import { prisma } from '../prisma/client';

export const MedicineService = {
  async create(data: any) {
    return prisma.medicine.create({ data });
  },

  async update(id: string, data: any) {
    return prisma.medicine.update({
      where: { id },
      data
    });
  },

  async delete(id: string) {
    return prisma.medicine.delete({
      where: { id }
    });
  }
};
