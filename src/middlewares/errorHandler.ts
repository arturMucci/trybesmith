import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

export default function errorHandler(
  error: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error.status) return res.status(error.status).json({ message: error.message });

  return res.status(500).json({ message: error.message });
}
