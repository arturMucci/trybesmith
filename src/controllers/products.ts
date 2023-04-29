import { Request, Response } from 'express';
import * as service from '../services/products';

export async function getAllProducts(_req:Request, res:Response) {
  const result = await service.getAllProducts();
  return res.status(200).json(result);
}

export async function insertProduct(req:Request, res:Response) {
  const { name, amount } = req.body;
  const response = await service.insertProduct(name, amount);
  return res.status(201).json(response);
}