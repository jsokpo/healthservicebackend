import { Request, Response } from 'express';
import { PrescriptionService } from '../services/prescription.service';

export const PrescriptionController = {
  getAll: async (_req: Request, res: Response) => {
    const data = await PrescriptionService.getAll();
    res.json(data);
  },

  getOne: async (req: Request, res: Response) => {
    const data = await PrescriptionService.getOne(req.params.id);
    res.json(data);
  },

  create: async (req: Request, res: Response) => {
    const data = await PrescriptionService.create(req.body);
    res.status(201).json(data);
  },

  update: async (req: Request, res: Response) => {
    const data = await PrescriptionService.update(req.params.id, req.body);
    res.json(data);
  },

  delete: async (req: Request, res: Response) => {
    const data = await PrescriptionService.delete(req.params.id);
    res.json({ message: 'Deleted', data });
  },

  updateWithAppointment: async (req: Request, res: Response) => {
    const data = await PrescriptionService.updateWithAppointment(req.body);
    res.json(data);
  },

  getByDoctor: async (req: Request, res: Response) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Unauthorized: user not found' });
  }
  const doctorId = req.user.id;
  const data = await PrescriptionService.getByDoctor(doctorId);
  res.json(data);
},

getByPatient: async (req: Request, res: Response) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Unauthorized: user not found' });
  }
  const patientId = req.user.id;
  const data = await PrescriptionService.getByPatient(patientId);
  res.json(data);
},
};
