import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.NODE_ENV === 'test' ? '127.0.0.1' : process.env.DB_HOST;

const { USER, PASSWORD, PORT } = process.env;

mongoose.set('strictQuery', false);
mongoose.connect(
  `mongodb://${USER}:${PASSWORD}@${DB_HOST}:${PORT}/ecomm-account?authSource=admin`,
);
const db = mongoose.connection;
export default db;