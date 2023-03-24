import { createProxyMiddleware } from "http-proxy-middleware";
import express from 'express';
import router from './routesAPI.js';
import { authenticationBearer } from "../middlewares/authentication.js";

const routes = (app) => {
  app.use('/api/users', createProxyMiddleware({ target: 'http://ecomm-account:3001', changeOrigin: true }));
  app.use('/api/admin/users/', authenticationBearer, createProxyMiddleware({ target: 'http://ecomm-account:3001', changeOrigin: true }));
  app.use(['/api/categories','/api/products'], createProxyMiddleware({ target: 'http://ecomm-product:3004', changeOrigin: true }));
  app.use(['/api/admin/categories','/api/admin/products'], authenticationBearer, createProxyMiddleware({ target: 'http://ecomm-product:3004', changeOrigin: true }));
  app.use('/payments', authenticationBearer, createProxyMiddleware({ target: 'http://ecomm-finance:3003', changeOrigin: true }));
  app.use(['/orders'], createProxyMiddleware({ target: 'http://ecomm-order:3002', changeOrigin: true }));   
  
  
  app.use(express.json(), router);


};

export default routes;