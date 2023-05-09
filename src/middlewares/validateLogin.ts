import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import loginSchema from '../Joi/loginSchema';

export default function validateLogin(req: Request, _res: Response, next: NextFunction) {
  console.log(req.body);

  const { error } = loginSchema.validate(req.body);
  console.log(error);

  if (error) {
    return next(createError(400, error.message));
  }

  return next();
}
