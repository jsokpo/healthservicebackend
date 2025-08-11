import express from 'express';
import { PrescriptionController } from '../controllers/prescription.controller';

const router = express.Router();

router.get('/', PrescriptionController.getAll);
router.get('/:id', PrescriptionController.getOne);
router.post('/create', PrescriptionController.create);
router.patch('/:id', PrescriptionController.update);
router.delete('/:id', PrescriptionController.delete);
router.patch('/update-prescription-appointment', PrescriptionController.updateWithAppointment);
router.get('/doctor/prescription', PrescriptionController.getByDoctor);
router.get('/patient/prescription', PrescriptionController.getByPatient);

export default router;
