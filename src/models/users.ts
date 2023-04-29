import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IMeta, IUser } from '../interfaces';

export async function insertUser(body:IUser):Promise<number> {
  const { username, vocation, level, password } = body;
  const [insertedUser] = await connection.execute<IMeta & RowDataPacket[]>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) values (?, ?, ?, ?);',
    [
      username,
      vocation,
      level,
      password,
    ],
  );

  return insertedUser.insertId;
}

export default {
  insertUser,
};