import { prisma } from '../prisma/client';

export const TimeSlotService = {
  create: async (data: any) => {
    return await prisma.timeSlot.create({ data });
  },

  findAll: async () => {
    return await prisma.timeSlot.findMany();
  },

  findById: async (id: string) => {
    return await prisma.timeSlot.findUnique({ where: { id } });
  },

  findByDoctor: async (doctorId: string) => {
    return await prisma.timeSlot.findMany({ where: { doctorId } });
  },

  findAppointmentTime: async (doctorId: string, day: string) => {
    return await prisma.timeSlot.findMany({
      where: {
        doctorId,
        day
      }
    });
  },

  update: async (id: string, data: any) => {
    return await prisma.timeSlot.update({
      where: { id },
      data
    });
  },

  deleteAll: async () => {
    return await prisma.timeSlot.deleteMany();
  }
};
