// COSAS QUE SE CARGAN EN EL HEADER
window.onload = () => {
    fetch('https://mmb-backend.onrender.com/listEventos')
    //fetch('http://localhost:3000/listEventos')
        .then(response => response.json())
        .then(data => {
            console.log('Listado de eventos:', data);
            // Array del evento principal
            getPrincipal(data.message[0]);
            getDestacados(data.message);

        })
        .catch(error => {
            console.error('Error al listar eventos:', error);
        });
};

// HEADER Y PRINCIPAL
function getPrincipal(evento) {
    const fechaConvertida = convertirFecha(evento['fecha']);

            document.getElementById('header').innerHTML = `
            <div id="header">
                <header>
                    <div>
                        <a class="logo" href="index.html">
                            <img src="img/logo.png" alt="MMB">
                        </a>

                        <nav class="flexcenter">
                            <a class="btnMenu" href="eventos.html">EVENTOS</a>
                            <a class="btnMenu" href="lasala.html">LA SALA</a>
                            <a class="btnMenu" href="contacto.html">CONTACTO</a>

                            <div class="group">
                                <input class="input" id="buscar" type="text" placeholder="BUSCAR">
                                <img src="icons/search.svg" alt="" class="icon">
                            </div>
                        </nav>
                    </div>
                </header>
                <div class="txtPrincipal flexcenter">
                    <div class="fechaPrincipal">
                        ${fechaConvertida.dia}
                        <span class="mes">${fechaConvertida.mes}</span>
                    </div>
                    <h1>${evento['nombre']}</h1>
                    <p class="hora subtitulo">${fechaConvertida.hora}</p>
                    <p>${evento['descripcion']}</p>
                    <a class="btnPrincipal" href="detallesycompra.html?evento=${evento['id']}">Comprar entradas</a>
                </div>
            </div>

            <style>
                #header{
                    background-image: url(img/${evento['portada']});
                }
            </style>
            `;
        };



// DESTACADOS
const getDestacados = async (eventos) => {
    const destacadosContainer = document.getElementById('contDestacados');

    destacadosContainer.innerHTML = '';

    for (let i = 1; i < 3; i++) {
        const evento = eventos[i];
        if (!evento) continue;

        const fechaConvertida = convertirFecha(evento['fecha']);

        if (!fechaConvertida) {
            return;
        }

        destacadosContainer.innerHTML += `
            <div class="eventoDestacado" style="background-image: url(img/${evento['img']}); background-size: cover;">
                <a href="detallesycompra.html?evento=${evento['id']}" class="txtDestacado flexcenter">
                    <div class="fechaDestacado flexcenter">
                        ${fechaConvertida.dia}
                        <span>${fechaConvertida.mes}</span>
                    </div>
                    <div>
                        <h3 id="nombre">${evento['nombre']}</h3>
                        <p id="hora">${fechaConvertida.hora}</p>
                    </div>
                </a>
            </div>`;
    }

};
