import { Request, Response } from 'express';
import service from '../services/orders';

async function getAllOrders(_req:Request, res:Response) {
  const result = await service.getAllOrders();
  return res.status(200).json(result);
}

export default {
  getAllOrders,
};
