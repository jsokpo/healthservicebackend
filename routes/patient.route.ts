// patient.route.ts
import { Router } from 'express';
import { PatientController } from '../controllers/patient.controller';
import multer from 'multer';

const router = Router();

// Multer config
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/', PatientController.signUp);
router.get('/:id', PatientController.get);
router.patch('/:id', upload.single('avatar'), PatientController.update);

export default router;
