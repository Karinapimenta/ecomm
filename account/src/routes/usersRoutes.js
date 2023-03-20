import express from 'express';
import UserController from '../controllers/usersController.js';
import { authenticationLocal, authenticationBearer } from '../middlewares/authentication.js';

const router = express.Router();

router
  .post('/api/users/login', authenticationLocal, UserController.userLogin)
  .get('/api/users/logout', authenticationBearer, UserController.userLogout)
  .get('/api/admin/users', authenticationBearer, UserController.getUsers)
  .get('/api/users/:id', UserController.getUserbyId)
  .post('/api/users', UserController.createUser)
  .put('/api/admin/users/:id', authenticationBearer, UserController.updateUser)
  .delete('/api/admin/users/:id', authenticationBearer, UserController.deleteUser);
export default router;
