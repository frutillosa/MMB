import mongoose from 'mongoose';

// CABEZAL DE COMPRA / Ticket de la compra
const { Schema, model } = mongoose;

const schemaCompra = new Schema({
  codigo: { type: String, unique: true, required: true},
  id: Number,
  nombre: String,
  telefono: Number,
  edad: Number,
  mediodepago: String,
});

export const modelCompra = model('Compra', schemaCompra);