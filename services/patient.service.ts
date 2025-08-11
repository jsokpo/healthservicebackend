import { prisma } from '../prisma/client';
import bcrypt from 'bcrypt';

export const PatientService = {
  /**
   * Register a new patient (creates a user with role 'patient')
   */
  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: 'patient',
      },
    });
    return user;
  },

  /**
   * Get a patient by ID
   */
  async getPatient(id: string) {
    return prisma.patient.findUnique({ where: { id } });
  },

  /**
   * Update patient details
   */
  async updatePatient(id: string, data: any) {
    return prisma.patient.update({
      where: { id },
      data
    });
  }
};
