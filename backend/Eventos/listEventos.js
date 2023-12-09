// Listado de eventos
import { ServerResponse } from '../responses/responses.js';
import { modelEvento } from '../models/Evento.js';


// export const listEventos = (req, res) => {

//     let compararFechas = (a, b) => {
//         const fechaA = new Date(a.fecha);
//         const fechaB = new Date(b.fecha);
        
//         return fechaA - fechaB;
//     };

    // modelEvento.find(req.body).sort({ fecha: 1 }).exec((err, data) => {
    //         if (err) {
    //           console.error('Error al obtener eventos:', err);
    //           res.json(new ServerResponse(`Lista no existe`, err));
    //         } else {
    //           console.log('Eventos ordenados por fecha:', data);
    //           // Realizar acciones adicionales con los eventos ordenados
    //           compararFechas()
    //         }
    //       });

    //     return res.json(new ServerResponse(data));
    // };

    // modelEvento.find(req.body).sort({ fecha: 1 }).exec((err, data) => {
    //   if (err) {
    //     console.error('Error al obtener eventos:', err);
    //     return res.json(new ServerResponse(`Lista no existe`, err));
    //   } else {
    //     console.log('Eventos obtenidos sin ordenar:', data);
        
    //     // Ordenar los eventos por fecha en el lado del cliente
    //     data.sort((a, b) => a.fecha - b.fecha);
    
    //     console.log('Eventos ordenados por fecha:', data);
    
    //     // Realizar acciones adicionales con los eventos ordenados
    //     compararFechas();
    
    //     return res.json(new ServerResponse(data));
    //   }
    // });

    export const listEventos = async (req, res) => {
      let compararFechas = (a, b) => {
          const fechaA = new Date(a.fecha);
          const fechaB = new Date(b.fecha);
          return fechaA - fechaB;
      };
  
      try {
          const data = await modelEvento.find(req.body).sort({ fecha: 1 }).exec();
          console.log('Eventos obtenidos sin ordenar:', data);
  
          // Ordenar los eventos por fecha en el lado del cliente
          data.sort(compararFechas);
  
          console.log('Eventos ordenados por fecha:', data);
  
          // Realizar acciones adicionales con los eventos ordenados
          // Aquí puedes llamar a compararFechas si es necesario
  
          return res.json(new ServerResponse(data));
      } catch (err) {
          console.error('Error al obtener eventos:', err);
          return res.json(new ServerResponse(`Lista no existe`, err));
      }
  };
  
  