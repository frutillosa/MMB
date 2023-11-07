// Listado de eventos
import { ServerResponse } from '../responses/responses.js';
import { modelEvento } from '../models/Evento.js';


export const listEventos = (req, res) => {
    modelEvento.find(req.body)
    .then((data) => {
        return res.json(new ServerResponse(data));
    })
    .catch((error) => {
        console.log(error);
        res.json(new ServerResponse(`List does not exist`, true));
    })
};