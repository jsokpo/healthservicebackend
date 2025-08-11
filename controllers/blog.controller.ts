import { Request, Response } from 'express';
import { BlogService } from '../services/blog.service';

export const BlogController = {
  createBlog: async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
      const image = req.file?.path || '';

      // ✅ Pull userId from authenticated user
      const userId = (req as any).user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized: user ID missing' });
      }

      const blog = await BlogService.createBlog({
        title,
        content,
        image,
        userId,
        doctorId: req.body.doctorId || undefined,
      });

      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create blog', error });
    }
  },

  getAllBlogs: async (req: Request, res: Response) => {
    const result = await BlogService.getAllBlogs(req.query);
    res.json(result);
  },

  getSingleBlog: async (req: Request, res: Response) => {
    const blog = await BlogService.getSingleBlog(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  },

  updateBlog: async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const data: any = { title, content };
    if (req.file?.path) data.image = req.file.path;

    const blog = await BlogService.updateBlog(req.params.id, data);
    res.json(blog);
  },

  deleteBlog: async (req: Request, res: Response) => {
    await BlogService.deleteBlog(req.params.id);
    res.status(204).send();
  },
};
