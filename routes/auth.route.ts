// auth.route.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();

router.post('/login', AuthController.login);
router.post('/reset-password', AuthController.resetPassword);
router.post('/reset-password/confirm', AuthController.confirmReset);

export default router;
