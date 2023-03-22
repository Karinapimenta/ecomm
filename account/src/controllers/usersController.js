import bcrypt from 'bcryptjs';
import jws from 'jsonwebtoken';
import User from '../models/User.js';
import DataCheck from '../dataCheck/dataCheckUser.js';
import { addTokenToBlocklist } from '../../redis/tokenList.js';

async function genToken(user) {
  const payload = {
    id: user._id,
  };
  const newToken = jws.sign(payload, process.env.APP_SECRET, { expiresIn: '30m' });
  return newToken;
}
class UserController {
  static getUsers = (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - No users found` });
      } else {
        res.status(200).json(users);
      }
    });
  };

  static getUserbyId = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, users) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - User not found` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static createUser = async (req, res) => {
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(user.password, salt);
    user.password = senhaHash;
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Bad Request` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static userLogin = async (req, res) => {
    const token = await genToken(req.user);
    return res.set('Authorization', token).status(204).send();
  };

  static userLogout = async (req, res) => {
    try {
      await addTokenToBlocklist(req.token);
      res.status(204).send();
    } catch (error) {
      res.status(500).json('Internal Server Error');
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;

    const customerInfo = req.body;
    const erros = [];
    DataCheck.emailCheck(customerInfo.email, erros);
    DataCheck.cpfCheck(customerInfo.cpf, erros);
    DataCheck.passwordCheck(customerInfo.password, erros);
    DataCheck.phoneCheck(customerInfo.phone, erros);
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(customerInfo.password, salt);
    customerInfo.password = senhaHash;
    let emptyBody = 0;
    if (Object.keys(req.body).length === 0) { emptyBody = true; }
    User.findByIdAndUpdate(id, { $set: customerInfo }, (err) => {
      if (!err && emptyBody === false && erros.length === 0) {
        res.status(200).send({ message: 'User updated successfully' });
      } else {
        res.status(400).send({ erros });
      }
    });
  };

  static deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(404).send({ message: 'User could not be deleted!' });
      } else {
        res.status(200).send({ message: 'User deleted successfully' });
      }
    });
  };
}

export default UserController;
