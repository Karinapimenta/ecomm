import jwt from 'jsonwebtoken';
import { addTokenToBlocklist } from '../../redis/tokenList.js';

async function genToken(user) {
  const payload = {
    id: user._id,
  };
  const newToken = jwt.sign(payload, process.env.APP_SECRET, { expiresIn: '30m' });
  return newToken;
}

class ApiGatewayController {
static userLogin = async (req, res) => {
  const token = await genToken(req.user);
  return res.set('Authorization', token).status(204).send();
};

static userLogout = async (req, res) => {
  try {
    await addTokenToBlocklist(req.token);
    res.status(204).send();
  } catch (error) {
    res.status(500).json('Bad Request');
  }
};
}
export default ApiGatewayController;