// IMPORTS POR LAS DUDAS SI SE EXPLOTA TODO
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './database/conexion.js'
import { createNewEvento } from './Eventos/postNewEvento.js';
import { listEventos } from './Eventos/listEventos.js';
import { deleteEvento } from './Eventos/deleteEvento.js';

// LLAMADO AL MONGO
const port = 3000;
connectDB();

// USEFUL
const app = express();
app.use(cors());
app.use(bodyParser.json());



// ENDPOINTS
// Crear nuevo evento
app.post('/addNewEvento', createNewEvento);

// Listado de eventos
app.get('/listEventos', listEventos);

// Borrar evento
app.delete('/deleteEvento', deleteEvento);


// LISTEN DEL SERVER
app.listen(port, () => {
    console.log(`Server corriendo en el ${port}!`);
});