// CONVERTIDOR DE FECHA

function convertirFecha(fechaString) {
  const fecha = new Date(fechaString);
  const dia = fecha.getUTCDate();
  const mes = obtenerMesTresLetras(fecha.getUTCMonth());
  const hora = agregarCeroAlInicio(fecha.getUTCHours());
  const minutos = agregarCeroAlInicio(fecha.getUTCMinutes());

  return {
    dia: dia,
    mes: mes,
    hora: `${hora}:${minutos}`,
  };
}

function obtenerMesTresLetras(numeroMes) {
  const meses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  return meses[numeroMes];
}

function agregarCeroAlInicio(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

// FILTRO DE FECHA
const fechaActual = new Date();
const semanaInicio = new Date(fechaActual);
const mesInicio = new Date(
  fechaActual.getFullYear(),
  fechaActual.getMonth(),
  1
);
const anoInicio = new Date(fechaActual.getFullYear(), 0, 1);

semanaInicio.setDate(fechaActual.getDate() - fechaActual.getDay());

const filtrarEventos = (eventos, filtro) => {
  const eventosFiltrados = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.fecha);

    switch (filtro) {
      case "semana":
        return fechaEvento >= semanaInicio && fechaEvento <= fechaActual;
      case "mes":
        return fechaEvento >= mesInicio && fechaEvento <= fechaActual;
      case "ano":
        return fechaEvento >= anoInicio && fechaEvento <= fechaActual;
      default:
        return true; // Para el caso "Todos los eventos"
    }
  });

  return eventosFiltrados;
};


// Listar eventos
const listarEventos = (eventoId) => {
  return new Promise((resolve, reject) => {
    fetch('https://mmb-backend.onrender.com/listEventos',{
    //fetch("http://localhost:3000/listEventos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Listado de eventos:", data);
        if (eventoId)
          resolve(data.message.find((evento) => evento.id == eventoId));
      })
      .catch((error) => {
        console.error("Error al listar eventos:", error);
        reject(error);
      });
  })
};
