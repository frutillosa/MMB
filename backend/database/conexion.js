import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Sustituir con la URL obtenida en MongoDB Atlas por otro token
const urlDatabase = 'mongodb+srv://Frutillosa:<9393>@frutillosa.7hihm4q.mongodb.net/';

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