import { prisma } from '../prisma/client';

export const BlogService = {
  createBlog: async (data: { title: string; content: string; image: string; userId: string; doctorId?: string }) => {
    return await prisma.blog.create({
      data: {
        title: data.title,
        content: data.content,
        image: data.image,
        userId: data.userId,
        doctorId: data.doctorId ?? null
      }
    });
  },

  getAllBlogs: async (query: any) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.blog.count()
    ]);

    return {
      data: blogs,
      meta: { total, page, limit }
    };
  },

  getSingleBlog: async (id: string) => {
    return await prisma.blog.findUnique({ where: { id } });
  },

  updateBlog: async (id: string, data: any) => {
    return await prisma.blog.update({ where: { id }, data });
  },

  deleteBlog: async (id: string) => {
    return await prisma.blog.delete({ where: { id } });
  }
};
