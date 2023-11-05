import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaDatos = new Schema({
  nombre: { String, required: true },
  telefono: { Number, required: true, unique: true },
  edad: { Number, required: true },
  email: { String, required: true, unique: true },
});

export const userDatos = model('Datos', schemaDatos);