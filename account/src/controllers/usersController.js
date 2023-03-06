import Users from '../models/User.js';
<<<<<<< HEAD
import DataCheck from '../dataCheck/dataCheckUser.js';
=======
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d

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
<<<<<<< HEAD
        res.status(404).send({ message: `${err.message} - User not found` });
=======
        res.status(404).send({ message: `${err.message} - User not foundi` });
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
      } else {
        res.status(200).send(users);
      }
    });
  };

  static saveUser = (req, res) => {
    const user = new Users(req.body);
    user.save((err) => {
      if (err) {
<<<<<<< HEAD
        res.status(400).send({ message: `${err.message} - Bad Request` });
=======
        res.status(40).send({ message: `${err.message} - Bad Request` });
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const { id } = req.params;
<<<<<<< HEAD
    const info = new Users(req.body);
    const flag = [];

    DataCheck.emailCheck(info.email, flag);
    DataCheck.cpfCheck(info.cpf, flag);
    DataCheck.passwordCheck(info.password, flag);
    DataCheck.phoneCheck(info.phone, flag);
    let size = 0;
    if (Object.keys(req.body).length === 0) { size = 1; }
    Users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err && size === 0 && flag.length === 0) {
        res.status(200).send({ message: 'User updated successfully' });
      } else {
        res.status(404).send({ message: 'User could NOT be updated due to invalid values' });
=======
    Users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'User updated successfully' });
      } else {
        res.status(404).send({ message: err.message });
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
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
