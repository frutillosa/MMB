// CONEXIÓN BACK END CON FRONT END

// END POINTS
// Crear un nuevo evento
// const nuevoEvento = {
//     nombre: 'Evento de ejemplo',
//     fecha: '2023-12-31',
//     descripcion: 'Descripción del evento de ejemplo'
//   };

// fetch('/addNewEvento', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(nuevoEvento)
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Evento creado:', data);
//     })
//     .catch(error => {
//       console.error('Error al crear el evento:', error);
//     });

//   // Borrar un evento (reemplaza 'eventoId' con el ID del evento que deseas borrar)
// const eventoId = 'id-del-evento-a-borrar';

// fetch(`/deleteEvento?eventoId=${eventoId}`, {
//   method: 'DELETE'
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Evento borrado:', data);
//   })
//   .catch(error => {
//     console.error('Error al borrar el evento:', error);
//   });

// COSAS UTILES

// Generador de qr (no se como funca esto pero lo pude hacer)

// Función para enviar los datos del formulario al backend
// Esta funcion es para tirar despues de que se pasa el gif de verificacion
const enviarDatos = () => {
  const formulario = document.getElementById("formularioCompra");
  const formData = new FormData(formulario);

  fetch('https://mmb-backend.onrender.com/guardarDatosCompra', {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => obtenerCodigoQR(data.codigo))
    .catch((error) =>
      console.error("Error al guardar los datos de compra", error)
    );
};

