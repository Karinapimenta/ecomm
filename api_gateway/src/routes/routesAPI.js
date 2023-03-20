import express from 'express';
import { authenticationLocal } from '../middlewares/authentication.js';
import { authenticationBearer } from '../middlewares/authentication.js';
import apiGatewayController from '../controllers/apiGatewayControllers.js';

const router = express.Router();

router  
  .get('/', (req, res)=>{res.status(200).send({titulo: 'API Gateway'});})
  .post('/login', authenticationLocal, apiGatewayController.userLogin)
  .get('/logout', authenticationBearer, apiGatewayController.userLogout)

export default router