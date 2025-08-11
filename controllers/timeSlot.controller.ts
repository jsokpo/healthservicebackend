import { Request, Response } from 'express';
import { TimeSlotService } from '../services/timeSlot.service';

export const TimeSlotController = {
  create: async (req: Request, res: Response) => {
    const data = req.body;
    const result = await TimeSlotService.create(data);
    res.status(201).json(result);
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await TimeSlotService.findAll();
    res.json(result);
  },

  getById: async (req: Request, res: Response) => {
    const result = await TimeSlotService.findById(req.params.id);
    res.json(result);
  },

  getDoctorTimeSlot: async (req: Request, res: Response) => {
    const { doctorId } = req.query;
    const result = await TimeSlotService.findByDoctor(doctorId as string);
    res.json(result);
  },

  getAppointmentTime: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { day } = req.query;
    const result = await TimeSlotService.findAppointmentTime(id, day as string);
    res.json(result);
  },

  update: async (req: Request, res: Response) => {
    const { id, ...data } = req.body;
    const result = await TimeSlotService.update(id, data);
    res.json(result);
  },

  deleteAll: async (_req: Request, res: Response) => {
    const result = await TimeSlotService.deleteAll();
    res.json(result);
  }
};
