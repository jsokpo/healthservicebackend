// routes/medicine.route.ts
import { Router } from 'express';
import { MedicineController } from '../controllers/medicine.controller';

const router = Router();

router.post('/', MedicineController.create);
router.patch('/', MedicineController.update);
router.delete('/:id', MedicineController.delete);

export default router;
