import { prisma } from '../prisma/client';

export const PrescriptionService = {
  getAll: async () => {
    return prisma.prescription.findMany();
  },

  getOne: async (id: string) => {
    return prisma.prescription.findUnique({ where: { id } });
  },

  create: async (data: any) => {
    return prisma.prescription.create({ data });
  },

  update: async (id: string, data: any) => {
    return prisma.prescription.update({
      where: { id },
      data
    });
  },

  delete: async (id: string) => {
    return prisma.prescription.delete({ where: { id } });
  },

  getByDoctor: async (doctorId: string) => {
    return prisma.prescription.findMany({ where: { doctorId } });
  },

  getByPatient: async (patientId: string) => {
    return prisma.prescription.findMany({ where: { patientId } });
  },

  updateWithAppointment: async (data: any) => {
    const { id, appointmentId, ...rest } = data;
    return prisma.prescription.update({
      where: { id },
      data: { ...rest, appointmentId }
    });
  }
};
