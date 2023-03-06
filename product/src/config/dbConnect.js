import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.NODE_ENV === 'test' ? '127.0.0.1' : process.env.DB_HOST;

mongoose.set('strictQuery', false);
mongoose.connect(
<<<<<<< HEAD
  `mongodb://admin:secret@${DB_HOST}:27017/ecomm-product?authSource=admin`,
=======
  'mongodb://admin:secret@127.0.0.1:27017/ecomm-product?authSource=admin',
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
);
const db = mongoose.connection;
export default db;
