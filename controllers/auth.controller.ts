import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.json(result);
  },

  resetPassword: async (req: Request, res: Response) => {
    const { email } = req.body;
    const result = await AuthService.resetPassword(email);
    res.json(result);
  },

  confirmReset: async (req: Request, res: Response) => {
    const { token, newPassword } = req.body;
    const result = await AuthService.confirmReset(token, newPassword);
    res.json(result);
  }
};
