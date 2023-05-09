import { Request, Response, NextFunction } from 'express';
import service from '../services/login';

async function userLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await service.userLogin(req.body);
    return res.status(200).json(result);
  } catch (Error) {
    return next(Error);
  }
}

export default {
  userLogin,
};