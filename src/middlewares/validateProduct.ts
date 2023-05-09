import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import productSchema from '../Joi/productSchema';

function gambis(regex: RegExp, error: Error, status: number, next: NextFunction): void {
  if (error.message.match(regex)) return next(createError(status, error.message));
}

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const { error } = productSchema.validate(req.body);

  if (error) {
    gambis(/is required/, error, 400, next);
    gambis(/must be a string/, error, 422, next);
    gambis(/length must be at least 3 characters long/, error, 422, next);
  }

  return next();
}