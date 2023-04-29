import { Request, Response } from 'express';
import service from '../services/users';

async function insertUser(req:Request, res:Response) {
  const result = await service.insertUser(req.body);

  return res.status(201).json(result);
}

export default {
  insertUser,
};
