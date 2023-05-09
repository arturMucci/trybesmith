import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { ILogin, INewUser } from '../interfaces';

async function userLogin(login:ILogin): Promise<INewUser> {
  const [[row]] = await connection
    .execute<INewUser[] & RowDataPacket[]>(
    `
    SELECT
      *
    FROM
      Trybesmith.users
    WHERE
      username = ?
    `,
    [login.username],
  );

  return row;
}

export default {
  userLogin,
};