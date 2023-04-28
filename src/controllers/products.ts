import { Request, Response } from 'express';
import serviceInsertProduct from '../services/products';

async function controllerInsertProduct(req:Request, res:Response) {
  const { name, amount } = req.body;
  const response = await serviceInsertProduct(name, amount);
  return res.status(201).json(response);
}

export default controllerInsertProduct;