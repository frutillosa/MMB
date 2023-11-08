import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaTicket = new Schema({
  id: Number,
  nombre: String,
  precio: Number,
});

export const modelTicket = model('Ticket', schemaTicket);