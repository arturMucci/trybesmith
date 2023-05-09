import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import loginSchema from '../Joi/loginSchema';

export default function validateLogin(req: Request, _res: Response, next: NextFunction) {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return next(createError(400, error.message));
  }

  return next();
}
