import { prisma } from '../prisma/client';

export const AppointmentService = {
  create: (data: any) => prisma.appointment.create({ data }),

  update: (id: string, data: any) => prisma.appointment.update({
    where: { id },
    data
  }),

  findById: (id: string) => prisma.appointment.findUnique({ where: { id } }),

  findPatientAppointments: (patientId: string) =>
    prisma.appointment.findMany({ where: { patientId } }),

  findDoctorAppointments: (doctorId: string) =>
    prisma.appointment.findMany({ where: { doctorId } }),

  findDoctorPatients: (doctorId: string) =>
    prisma.appointment.findMany({
      where: { doctorId },
      distinct: ['patientId'],
    }),

  // Placeholder: Replace with real invoice logic
  getInvoices: (type: 'patient' | 'doctor', id: string) =>
    prisma.appointment.findMany({
      where: type === 'patient' ? { patientId: id } : { doctorId: id }
    })
};
