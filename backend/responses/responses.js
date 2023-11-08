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


