import mongoose from 'mongoose';
<<<<<<< HEAD
import * as dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.NODE_ENV === 'test' ? '127.0.0.1' : process.env.DB_HOST;

mongoose.set('strictQuery', false);
mongoose.connect(
  `mongodb://admin:secret@${DB_HOST}:27017/ecomm-account?authSource=admin`,
=======

mongoose.connect(
  'mongodb://admin:secret@mongo:27017/ecomm-account?authSource=admin',
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
);
const db = mongoose.connection;
export default db;
