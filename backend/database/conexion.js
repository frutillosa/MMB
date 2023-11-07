import mongoose from 'mongoose';

// URL from Mongodb
const urlDatabase = 'mongodb+srv://Monguito:12341234@grupo.1bbkcid.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
  mongoose.connect(urlDatabase,{})
  .then(() => {
    console.log('Conexión exitosa a la base de datos')})
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);});
};

export default connectDB;