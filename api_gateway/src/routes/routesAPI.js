import express from 'express';
import { authenticationLocal,  authenticationBearer } from '../middlewares/authentication.js';
import ApiGatewayController from '../controllers/apiGatewayControllers.js';

const router = express.Router();

router  
  .get('/', (req, res)=>{res.status(200).send({titulo: 'API Gateway'});})
  .post('/login', authenticationLocal, ApiGatewayController.userLogin)
  .get('/logout', authenticationBearer, ApiGatewayController.userLogout)

export default router