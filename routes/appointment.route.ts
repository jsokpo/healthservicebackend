import { Router } from 'express';
import { AppointmentController } from '../controllers/appointment.controller';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/create', authenticate, AppointmentController.create);
router.post('/create-un-authenticate', AppointmentController.create);
router.post('/tracking', AppointmentController.track);
router.patch('/:id', authenticate, AppointmentController.update);

router.get('/patient/appointments', authenticate, AppointmentController.getPatientAppointments);
router.get('/doctor/appointments', authenticate, AppointmentController.getDoctorAppointments);
router.get('/doctor/patients', authenticate, AppointmentController.getDoctorPatients);

router.get('/patient/invoices', authenticate, AppointmentController.getInvoices);
router.get('/doctor/invoices', authenticate, AppointmentController.getInvoices);

router.get('/:id', authenticate, AppointmentController.getById);

export default router;
