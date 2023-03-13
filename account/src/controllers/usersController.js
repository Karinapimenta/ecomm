import bcrypt from 'bcryptjs';
import jws from 'jsonwebtoken';
import Users from '../models/User.js';
import DataCheck from '../dataCheck/dataCheckUser.js';

async function genToken(user) {
  const payload = {
    id: user._id,
  };
  const newToken = jws.sign(payload, process.env.APP_SECRET, { expiresIn: '30m' });
  return newToken;
}
class UserController {
  static getUsers = (req, res) => {
    Users.find((err, users) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - No users found` });
      } else {
        res.status(200).json(users);
      }
    });
  };

  static getUserbyId = (req, res) => {
    const { id } = req.params;
    Users.findById(id, (err, users) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - User not found` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static createUser = (req, res) => {
    const user = new Users(req.body);
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

  static updateUser = async (req, res) => {
    const { id } = req.params;

    const info = req.body;
    const erros = [];

    DataCheck.emailCheck(info.email, erros);
    DataCheck.cpfCheck(info.cpf, erros);
    DataCheck.passwordCheck(info.password, erros);
    DataCheck.phoneCheck(info.phone, erros);
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(info.password, salt);
    info.password = senhaHash;
    let size = 0;
    if (Object.keys(req.body).length === 0) { size = 1; }
    Users.findByIdAndUpdate(id, { $set: info }, (err) => {
      if (!err && size === 0 && erros.length === 0) {
        res.status(200).send({ message: 'User updated successfully' });
      } else {
        res.status(400).send({ erros });
      }
    });
  };

  static deleteUser = (req, res) => {
    const { id } = req.params;
    Users.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(404).send({ message: 'User could not be deleted!' });
      } else {
        res.status(200).send({ message: 'User deleted successfully' });
      }
    });
  };
}

export default UserController;
