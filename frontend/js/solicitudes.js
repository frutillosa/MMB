// CONEXIÓN BACK END CON FRONT END

// Crear un nuevo evento
const nuevoEvento = {
    nombre: 'Evento de ejemplo',
    fecha: '2023-12-31',
    descripcion: 'Descripción del evento de ejemplo'
  };
  
  fetch('/addNewEvento', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoEvento)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Evento creado:', data);
    })
    .catch(error => {
      console.error('Error al crear el evento:', error);
    });
  
  // Listar eventos
  fetch('/listEventos', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Listado de eventos:', data);
    })
    .catch(error => {
      console.error('Error al listar eventos:', error);
    });
  
  // Borrar un evento (reemplaza 'eventoId' con el ID del evento que deseas borrar)
  const eventoId = 'id-del-evento-a-borrar';
  
  fetch(`/deleteEvento?eventoId=${eventoId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Evento borrado:', data);
    })
    .catch(error => {
      console.error('Error al borrar el evento:', error);
    });
  