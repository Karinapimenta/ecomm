import express from 'express';
import UserController from '../controllers/usersController.js';


const router = express.Router();

router
    .get('/api/admin/users', UserController.getUsers)
    .get('/api/users/:id', UserController.getUserbyId)
    .post('/api/admin/users', UserController.saveUser)
    .put('/api/admin/users/:id', UserController.updateUser)
    .delete('/api/admin/users/:id', UserController.deleteUser)
export default router;  