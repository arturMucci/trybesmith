import { RowDataPacket } from 'mysql2';
import connection from './connection';

interface IMeta {
  insertId: number;
}

async function modelInsertProduct(name:string, amount:string):Promise<number> {
  const [result] = await connection
    .execute<IMeta & RowDataPacket[]>(
    'INSERT INTO Trybesmith.products (name, amount) values (?, ?);',
    [name, amount],
  );

  return result.insertId;
}

export default modelInsertProduct;