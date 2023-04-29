import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { INewOrder } from '../interfaces';

async function getAllOrders():Promise<INewOrder[]> {
  const [allOrders] = await connection
    .execute<INewOrder[] & RowDataPacket[]>(
    `SELECT
      orders.id,
      orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
    FROM
      Trybesmith.orders AS orders
    INNER JOIN
      Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY
      products.order_id;`,
  );

  return allOrders;
}

export default {
  getAllOrders,
};