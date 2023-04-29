import { INewOrder } from '../interfaces';
import models from '../models/orders';

async function getAllOrders():Promise<INewOrder[]> {
  const result = await models.getAllOrders();
  return result;
}

export default {
  getAllOrders,
};
