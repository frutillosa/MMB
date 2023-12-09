// ACA VAN LOS DATOS QUE TIENEN QUE CARGARSE DINAMICAMENTE PARA EL PRIMER EVENTO

window.onload = () => {
    fetch('https://mmb-frontend.onrender.com/listEventos', opciones)
    .then(response => response.json())
    .then(data => {
        console.log('Listado de eventos:', data);
        // ACA VAN LAS COSAS QUE TIENEN QUE CARGAR
        if (data.message.length > 1)
            getPrincipal(data.message[0]);
        if (data.message.length > 2)
            getEventos(data.message);
    })
    .catch(error => {
        console.error('Error al listar eventos:', error);
    });
};

// PRINCIPAL

const getPrincipal = (obj) => {
    document.getElementById('header').innerHTML = `
        <div id="txtPrincipal">
                <div id="fechaPrincipal">
                    06
                    <span>OCT</span>
                </div>
            <h1>${obj['nombre']}</h1>
            <p>21:00</p>
            <p class="subtitulo">${obj['descripcion']}</p>
            <a class="btnPrincipal" href="">Comprar entradas</a>
        </div>

        <style>
            #header{
            background-image: url(${obj['portada']});
            }
        </style>
    `;
};


// OBTENER EVENTOS
const getEventos = (data) => {

    let html = "";
    for (let i = 1; i < data.length; i++)
    {
        const element = data[i];
        console.log(element);
        html += `
            <div>
            </div>
        `;
    }
    //document.getElementById('dsfsdf').innerHTML = html;
};
