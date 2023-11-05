import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaCompra = new Schema({
  id: Number,
  nombre: { String, required: true },
  telefono: { Number, required: true },
  edad: { Number, required: true },
  mediodepago: { String, required: true },
});

export const userCompra = model('Compra', schemaCompra);