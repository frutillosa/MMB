import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const uri = process.env.URL_DATABASE;

// URL from Mongodb
const connectDB = () => {
  mongoose.connect(uri,{})
  .then(() => {
    console.log('Conexión exitosa a la base de datos')})
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);});
};

export default connectDB;