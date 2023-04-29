import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IMeta, INewProduct } from '../interfaces';

export async function getAllProducts():Promise<INewProduct[]> {
  const [allProducts] = await connection
    .execute<INewProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.products;');

  return allProducts;
}

export async function insertProduct(name:string, amount:string):Promise<number> {
  const [insertedProduct] = await connection
    .execute<IMeta & RowDataPacket[]>(
    'INSERT INTO Trybesmith.products (name, amount) values (?, ?);',
    [name, amount],
  );

  return insertedProduct.insertId;
}
