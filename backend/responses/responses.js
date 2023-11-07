// Respuesta del server
export class ServerResponse {
    message = '';
    error = false;
    data;
  
    constructor(message, error) {
      this.message = message;
      this.error = error;
    }
  }

// Buscar evento en Base de datos - ARREGLAR ESTO
export const filtroEvento = (value) => value ? new RegExp(value, 'gi') : undefined;
