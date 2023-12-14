// COSAS QUE SE CARGAN EN EL EVENTOS
window.onload = () => {
    fetch('https://mmb-backend.onrender.com/listEventos')
    //fetch('http://localhost:3000/listEventos')
        .then(response => response.json())
        .then(data => {
            console.log('Listado de eventos:', data);
            // Array de los eventos
            getListado(data.message);

        })
        .catch(error => {
            console.error('Error al listar eventos:', error);
        });
};

// OBTENER EVENTOS
const getListado = (eventos) => {
    const contListado = document.getElementById('contListado');

    contListado.innerHTML = '';

    for (let i = 0; i < eventos.length; i++) {
        const evento = eventos[i];
        if (!evento) continue;

        const fechaConvertida = convertirFecha(evento['fecha']);

        contListado.innerHTML += `
        <div class="eventoDestacado" style="background-image: url(img/${evento['img']}); background-size: cover;">
            <div class="txtDestacado flexcenter">
                <div class="fechaDestacado flexcenter">
                    ${fechaConvertida.dia}
                    <span>${fechaConvertida.mes}</span>
                </div>
                <div>
                    <h3 id="nombre">${evento['nombre']}</h3>
                    <p class="subtitulo" id="hora">${fechaConvertida.hora}</p>
                </div>
            </div>
        </div>
        `;
    }

};

const filtroFecha = document.getElementById('filtrosFecha');

filtroFecha.addEventListener('change', () => {
    const filtroSeleccionado = filtroFecha.value;
    const eventosFiltrados = filtrarEventos(todosLosEventos, filtroSeleccionado);
    getListado(eventosFiltrados);
});
