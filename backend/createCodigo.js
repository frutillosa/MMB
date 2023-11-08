// ESTO CREA UN CODIGO COMO POR EJEMPLO: AAA1111
export const createCodigo = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codigo = '';
  
    // Esto crea 3 letras al azar
    for (let i = 0; i < 3; i++) {
      const letraRandom = letras.charAt(Math.floor(Math.random() * letras.length));
      codigo += letraRandom;
    }
  
    // Esto crea 4 numeros al azar
    for (let i = 0; i < 4; i++) {
      const numeroRandom = Math.floor(Math.random() * 10);
      codigo += numeroRandom;
    }
  
    return codigo;
  }