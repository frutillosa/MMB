import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Sustituir con la URL obtenida en MongoDB Atlas por otro token
const urlDatabase = 'mongodb+srv://Admin:<9393>@grupo.1bbkcid.mongodb.net/?retryWrites=true&w=majority';

export const connectDB = () => {
  useUnifiedTopology = true,
  useNewUrlParser = true
  
  return mongoose.connect(urlDatabase)
    .then(() => {
      console.log('Connected.');
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};