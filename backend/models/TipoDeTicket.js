import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaTicket = new Schema({
  id: Number,
  nombre: { String, required: true },
  precio: { Number, required: true },
});

export const userTicket = model('Ticket', schemaTicket);