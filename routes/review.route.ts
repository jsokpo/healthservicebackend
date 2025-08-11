import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';

const router = Router();

router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getReviewById);
router.get('/doctor-review/:id', ReviewController.getDoctorReviews);
router.post('/', ReviewController.createReview);
router.patch('/:id', ReviewController.updateReview);
router.patch('/:id/reply', ReviewController.replyReview);
router.delete('/:id', ReviewController.deleteReview);

export default router;
