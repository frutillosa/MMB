import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaEvento = new Schema({
  id: { type: Number, unique: true },
  nombre: { type: String, unique: true, required: true},
  fecha: { type: Date, unique: true },
  descripcion: String,
  img: String,
  portada: String,
});

export const modelEvento = model('Evento', schemaEvento);