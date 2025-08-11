// types/express/index.d.ts
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../models/user.model';

declare global {
  namespace Express {
    interface Request {
      /**
       * Authenticated user data from JWT
       * Optional so routes without authentication still work
       */
      user?: JwtPayload & User & { id: string; role?: string };
    }
  }
}

export {};

