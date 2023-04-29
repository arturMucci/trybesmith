import JWT from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'nada';

export default function generateToken(id:number):string {
  const newToken = JWT.sign({ id }, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return newToken;
}