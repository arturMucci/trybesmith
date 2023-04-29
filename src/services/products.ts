import { INewProduct } from '../interfaces';
import * as models from '../models/products';

export async function getAllProducts():Promise<INewProduct[]> {
  const result = await models.getAllProducts();
  return result;
}

export async function insertProduct(name: string, amount: string):Promise<INewProduct> {
  const result = await models.insertProduct(name, amount);
  return {
    id: result,
    name,
    amount,
  };
}
