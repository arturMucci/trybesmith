import { IToken, IUser } from '../interfaces';
import generateToken from '../utils/auth';
import * as models from '../models/users';

async function insertUser(body:IUser):Promise<IToken> {
  const { username, vocation, level, password } = body;
  const result = await models.insertUser({
    username,
    vocation,
    level,
    password,
  });

  const token = generateToken(result);

  return { token };
}

export default {
  insertUser,
};