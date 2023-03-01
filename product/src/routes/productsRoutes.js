import express from 'express';
import ProductController from '../controllers/productsController.js';

const router = express.Router();
router
  .get('/api/products', ProductController.getProducts)
  .get('/api/products/:id', ProductController.getProductbyId)
  .post('/api/admin/products', ProductController.saveProduct)
  .put('/api/admin/products/:id', ProductController.updateProduct)
  .delete('/api/admin/products/:id', ProductController.deleteProduct);
export default router;
