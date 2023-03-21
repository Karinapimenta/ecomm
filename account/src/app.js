/* eslint-disable no-console */
import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
// eslint-disable-next-line no-unused-vars
import client from '../redis/serverConnection.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('conexão com banco foi feita com sucesso');
});

const app = express();
app.use(express.json());
routes(app);

export default app;
