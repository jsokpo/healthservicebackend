import { Router } from 'express';
import { BlogController } from '../controllers/blog.controller';
import { upload } from '../middlewares/upload';

const router = Router();

router.post('/', upload.single('image'), BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlog);
router.patch('/:id', upload.single('image'), BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export default router;
