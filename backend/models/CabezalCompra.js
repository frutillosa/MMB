import mongoose from 'mongoose';

// CABEZAL DE COMPRA / Ticket de la compra
const { Schema, model } = mongoose;

const schemaCompra = new Schema({
  codigo: { String, required: true, unique: true },
  id: Number,
  nombre: { String, required: true },
  telefono: { Number, required: true },
  edad: { Number, required: true },
  mediodepago: { String, required: true },
});

export const modelCompra = model('Compra', schemaCompra);