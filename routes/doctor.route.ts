// doctor.route.ts
import { Router } from 'express';
import { DoctorController } from '../controllers/doctor.controller';
import { upload } from '../middlewares/upload';

const router = Router();

router.get('/', DoctorController.getAllDoctors);
router.get('/:id', DoctorController.getDoctorById);
router.patch('/:id', upload.single('profileImg'), DoctorController.updateDoctor);
router.post('/', DoctorController.signUp);

export default router;
