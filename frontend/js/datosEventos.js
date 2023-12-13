window.onload = () => {
    fetch('http://localhost:3000/listEventos', )
    .then(response => response.json())
    .then(data => {
        console.log('Listado de eventos:', data);
        // ACA VAN LAS COSAS QUE TIENEN QUE CARGAR
        getEventos(data.message);
    })
    .catch(error => {
        console.error('Error al listar eventos:', error);
    });
};

// OBTENER EVENTOS
const getEventos = (data) => {

    let html = "";
    for (let i = 0; i < data.length; i++)
    {n 
        const element = data[i];
        console.log(element);
        html += `
        <div class="eventoDestacado" style="background-image: url(${data.img[i]}); background-size: cover;">
            <div class="txtDestacado flexcenter">
                <div class="fechaDestacado flexcenter">
                    06
                    <span>OCT</span>
                </div>
                <div>
                    <h3 id="nombre">${data.titulo[i]}</h3>
                    <p class="subtitulo" id="hora">21:00</p>
                </div>
            </div>
        </div>
        `;
    }

    document.getElementsByClassName('contListado').innerHTML = html;
};
