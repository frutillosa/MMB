// Listado de eventos
import { ServerResponse } from '../responses/responses.js';
import { modelEvento } from '../models/Evento.js';

    export const listEventos = async (req, res) => {
      let compararFechas = (a, b) => {
          const fechaA = new Date(a.fecha);
          const fechaB = new Date(b.fecha);
          return fechaA - fechaB;
      };
  
      try {
          const data = await modelEvento.find(req.body).sort({ fecha: 1 }).exec();
          console.log('Eventos obtenidos sin ordenar:', data);
  
          data.sort(compararFechas);
  
          console.log('Eventos ordenados por fecha:', data);
  
          return res.json(new ServerResponse(data));
      } catch (err) {
          console.error('Error al obtener eventos:', err);
          return res.json(new ServerResponse(`Lista no existe`, err));
      }
  };
  
  