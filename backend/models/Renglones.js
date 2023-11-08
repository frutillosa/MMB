import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// RENGLONES / Datos de la compra guardados
const schemaRenglones = new Schema({
  idCbz: { type: Number, unique: true },
  idTdt: { type: Number, unique: true }, 
  cant: Number,
  precio: Number,
});

export const modelRenglones = model('Datos', schemaRenglones);