import { modelEvento } from "../models/Evento.js";
import { ServerResponse } from "../responses/responses.js";

export const deleteEvento = (req, res) => {
  const id = Number(req.body.id);

  modelEvento
    .deleteOne({ id: id })
    .then((data) => {
      // Si no existe error
      if (data.deletedCount !== 1) {
        res.json(new ServerResponse(`No se puede borrar, este evento no existe`, true))
      } else {
        // Si existe se borra
        res.json(new ServerResponse(`El evento ${id} fue borrado`));
      }
    })
    .catch((error) => {
      console.log(error);
      res.json(new ServerResponse(`Fatal error`, true));
    });
};