import express from 'express';
import ProductController from '../controllers/productsController.js';

const router = express.Router();
router
    .get('/api/products', ProductController.getProducts)
export default router;
