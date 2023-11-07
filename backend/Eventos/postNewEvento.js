// Guardar nuevo evento
import { createId } from '../createId.js';
import { ServerResponse } from '../responses/responses.js';
import { modelEvento } from '../models/Evento.js';

export const createNewEvento = (req, res) => {
    if (req.body.nombre === undefined) {res.json(new ServerResponse(`id no existe`, true)); return}
    if (req.body.fecha === undefined) {res.json(new ServerResponse(`esta fecha no existe`, true)); return}
    if (req.body.descripcion === undefined) {res.json(new ServerResponse(`esta descripcion no existe`, true)); return}

	const newId = createId();

	const instEvento = new modelEvento({
		id: newId,
		nombre: req.body.nombre,
		fecha: req.body.fecha,
		descripcion: req.body.descripcion,
	});

	instEvento.save()
	.then(() => {
		res.json(new ServerResponse(`Nuevo evento fue agregado con el id ${newId}`));
	})
	.catch((error) => {
		res.json(new ServerResponse(`No pudo agregarse un nuevo evento con el id ${newId}`, true));
		console.log(error);
	});
};