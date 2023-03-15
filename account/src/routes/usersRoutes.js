import express from 'express';
import UserController from '../controllers/usersController.js';
import { authenticationLocal, authenticationBearer } from '../middlewares/authentication.js';

const router = express.Router();

router
  .get('/api/admin/users', authenticationBearer, UserController.getUsers)
  .get('/api/users/:id', UserController.getUserbyId)
  .post('/api/users', UserController.createUser)
  .post('/api/users/login', authenticationLocal, UserController.userLogin)
  .put('/api/admin/users/:id', authenticationBearer, UserController.updateUser)
  .delete('/api/admin/users/:id', authenticationBearer, UserController.deleteUser);
export default router;
