import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaEvento = new Schema({
  id: Number,
  nombre: { String, required: true },
  fecha: { Date, required: true, unique: true },
  descripcion: { String, required: true },
});

export const modelEvento = model('Evento', schemaEvento);