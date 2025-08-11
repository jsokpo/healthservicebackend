import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';

export const ReviewController = {
  getAllReviews: async (req: Request, res: Response) => {
    const reviews = await ReviewService.getAll(req.query);
    res.json(reviews);
  },

  getReviewById: async (req: Request, res: Response) => {
    const review = await ReviewService.getById(req.params.id);
    res.json(review);
  },

  getDoctorReviews: async (req: Request, res: Response) => {
    const reviews = await ReviewService.getDoctorReviews(req.params.id);
    res.json(reviews);
  },

  createReview: async (req: Request, res: Response) => {
    const review = await ReviewService.create(req.body);
    res.status(201).json(review);
  },

  updateReview: async (req: Request, res: Response) => {
    const updated = await ReviewService.update(req.params.id, req.body);
    res.json(updated);
  },

  replyReview: async (req: Request, res: Response) => {
    const updated = await ReviewService.reply(req.params.id, req.body.reply);
    res.json(updated);
  },

  deleteReview: async (req: Request, res: Response) => {
    const deleted = await ReviewService.delete(req.params.id);
    res.json(deleted);
  }
};
