import { Request, Response } from 'express';
import { PatientService } from '../services/patient.service';

export const PatientController = {
  signUp: async (req: Request, res: Response) => {
    const user = await PatientService.register(req.body);
    res.status(201).json(user);
  },

  get: async (req: Request, res: Response) => {
    const { id } = req.params;
    // your get logic
    res.status(200).json({ id, name: 'John Doe' });
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const avatar = req.file;
    // your update logic
    res.status(200).json({ message: 'Patient updated', id, avatar });
  }
};
