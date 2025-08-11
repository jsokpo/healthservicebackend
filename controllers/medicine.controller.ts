// controllers/medicine.controller.ts
import { Request, Response } from 'express';
import { MedicineService } from '../services/medicine.service';

export const MedicineController = {
  async create(req: Request, res: Response) {
    const medicine = await MedicineService.create(req.body);
    res.status(201).json(medicine);
  },

  async update(req: Request, res: Response) {
    const { id, ...data } = req.body;
    const updated = await MedicineService.update(id, data);
    res.json(updated);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await MedicineService.delete(id);
    res.status(204).send();
  }
};
