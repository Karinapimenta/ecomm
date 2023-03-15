import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import { authenticationBearer } from '../middlewares/authentication.js';

const router = express.Router();
router
  .get('/api/categories', CategoryController.getCategories)
  .get('/api/categories/:id', CategoryController.getCategoryById)
  .post('/api/admin/categories', authenticationBearer, CategoryController.saveCategory)
  .put('/api/admin/categories/:id', authenticationBearer, CategoryController.updateCategory)
  .delete('/api/admin/categories/:id', authenticationBearer, CategoryController.deleteCategory)
  .patch('/api/admin/categories/:id', authenticationBearer, CategoryController.activateCategory);
export default router;
