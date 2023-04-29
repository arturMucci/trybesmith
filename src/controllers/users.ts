import { Request, Response } from 'express';
import * as service from '../services/users';

// {
//   username: "MAX",
//   vocation: "swordsman",
//   level: 10,
//   password: "SavingPeople",
// }

export async function getAll() {
  console.log('xablau');
}

export async function insertUser(req:Request, res:Response) {
  const result = await service.insertUser(req.body);

  return res.status(201).json(result);
}
