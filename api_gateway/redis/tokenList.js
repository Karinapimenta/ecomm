import jwt from 'jsonwebtoken';
import client from './serverConnection.js';

async function addTokenToBlocklist(token) {
  const dateExpiration = jwt.decode(token).exp;
  await client.set(token, '');
  client.expireAt(token, dateExpiration);
}

async function findToken(token) {
  const result = await client.exists(token);
  console.log(result);
  if (result === 1) {
    throw new jwt.JsonWebTokenError('Token bloqueado');
  }
}

export { addTokenToBlocklist, findToken };
