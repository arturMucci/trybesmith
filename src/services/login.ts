// import createError from 'http-errors';
import createError from 'http-errors';
import generateToken from '../utils/auth';
import { ILogin, IToken } from '../interfaces';

import models from '../models/login';

async function userLogin(login: ILogin): Promise<IToken> {
  const result = await models
    .userLogin(login);

  if (!result || result.password !== login.password) {
    throw createError(401, 'Username or password invalid');
  }

  const token = generateToken(result.id);

  return { token };
}

export default {
  userLogin,
};