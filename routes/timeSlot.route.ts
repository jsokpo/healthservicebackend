import express from 'express';
import { TimeSlotController } from '../controllers/timeSlot.controller';

const router = express.Router();

router.post('/create', TimeSlotController.create);
router.get('/', TimeSlotController.getAll);
router.get('/:id', TimeSlotController.getById);
router.get('/doctor-review/:id', TimeSlotController.getDoctorTimeSlot);
router.get('/appointment-time/:id', TimeSlotController.getAppointmentTime);
router.patch('/', TimeSlotController.update);
router.delete('/', TimeSlotController.deleteAll);

export default router;
