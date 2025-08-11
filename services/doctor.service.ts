import { prisma } from '../prisma/client';
import bcrypt from 'bcrypt';

export const DoctorService = {
  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: 'doctor',
      }
    });
    return user;
  },

  async getAllDoctors(query: any) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      prisma.doctor.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.doctor.count()
    ]);

    return {
      data,
      meta: { page, limit, total }
    };
  },

  async getDoctorById(id: string) {
    return prisma.doctor.findUnique({
      where: { id }
    });
  },

  async updateDoctor(id: string, data: any) {
    return prisma.doctor.update({
      where: { id },
      data
    });
  }
};
