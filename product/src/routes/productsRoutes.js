import express from 'express';
import ProductController from '../controllers/productsController.js';
import { authenticationBearer } from '../middlewares/authentication.js';

const router = express.Router();
router
  .get('/api/products', ProductController.getProducts)
  .get('/api/products/:id', ProductController.getProductbyId)
  .post('/api/admin/products', authenticationBearer, ProductController.saveProduct)
  .put('/api/admin/products/:id', authenticationBearer, ProductController.updateProduct)
  .delete('/api/admin/products/:id', authenticationBearer, ProductController.deleteProduct);
export default router;
