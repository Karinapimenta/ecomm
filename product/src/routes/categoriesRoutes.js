import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();
router
    .get('/api/categories', CategoryController.getCategories)
    .get('/api/categories/:id', CategoryController.getCategorybyId)
    .post('/api/admin/categories', CategoryController.registerCategory)
    .put('/api/admin/categories/:id', CategoryController.updateCategory)
    .delete('/api/admin/categories/:id', CategoryController.deleteCategory)
    .patch('/api/admin/categories/:id', CategoryController.activateCategory)
export default router;
