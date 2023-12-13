// ACA VAN LOS DATOS QUE TIENEN QUE CARGARSE DINAMICAMENTE PARA EL PRIMER EVENTO


// window.onload = () => {
//     fetch('http://localhost:3000/listEventos', )
//     .then(response => response.json())
//     .then(data => {
//         console.log('Listado de eventos:', data);
//         // ACA VAN LAS COSAS QUE TIENEN QUE CARGAR
//         getPrincipal(data.message[0]);
//     })
//     .catch(error => {
//         console.error('Error al listar eventos:', error);
//     });
// };

// PRINCIPAL
// const getPrincipal = (obj) => {
//     fechaConvertida = convertirFecha(obj['fecha']);

//     document.getElementById('header').innerHTML = `

//     <div id="header">
//             <header>
//                 <div>
//                     <a class="logo" href="index.html">
//                         <img src="img/logo.png" alt="MMB">
//                     </a>
                    
//                     <nav class="flexcenter">
//                         <a class="btnMenu" href="eventos.html">EVENTOS</a>
//                         <a class="btnMenu" href="lasala.html">LA SALA</a>
//                         <a class="btnMenu" href="contacto.html">CONTACTO</a>
//                     </nav>
//                 </div>
//             </header>
//         <div class="txtPrincipal">
//             <div class="fechaPrincipal">
//                 06
//                 <span class="mes">OCT</span>
//             </div>
//             <h1>${obj['nombre']}</h1>
//             <p class="hora">21:00</p>
//             <p>${obj['descripcion']}</p>
//             <a class="btnPrincipal" href="">Comprar entradas</a>
//         </div>
//     </div>

//         <style>
//             #header{
//             background-image: url(${obj['portada']});
//             }
//         </style>
//     `;
// };

// main.js

window.onload = () => {
    fetch('http://localhost:3000/listEventos')
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

const getPrincipal = (obj) => {
    const fechaConvertida = convertirFecha(obj['fecha']);

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
            </nav>
        </div>
    </header>
            <div class="txtPrincipal">
                <div class="fechaPrincipal">
                    ${fechaConvertida.dia}
                    <span class="mes">${fechaConvertida.mes}</span>
                </div>
                    <h1>${obj['nombre']}</h1>
                    <p class="hora subtitulo">${fechaConvertida.hora}</p>
                    <p>${obj['descripcion']}</p>
                    <a class="btnPrincipal" href="">Comprar entradas</a>
                </div>
        </div>

        <style>
            #header{
                background-image: url(img/${obj['portada']});
            }
        </style>
    `;
};


// const getDestacados = (obj) => {
//     const fechaConvertida = convertirFecha(obj[1]['fecha']);

//     document.getElementById('destacados').innerHTML = `
//     <div class="eventoDestacado" style="background-image: url(img/anthrax.png); background-size: cover;">
//                 <div class="txtDestacado flexcenter">
//                     <div class="fechaDestacado flexcenter">
//                         06
//                         <span>OCT</span>
//                     </div>
//                     <div>
//                         <h3 id="nombre">Titulo</h3>
//                         <p id="hora">21:00</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="eventoDestacado" style="background-image: url(img/samurai.png); background-size: cover;">
//                 <div class="txtDestacado flexcenter">
//                     <div class="fechaDestacado flexcenter">
//                         06
//                         <span>OCT</span>
//                     </div>
//                     <div>
//                         <h3 id="nombre">Titulo</h3>
//                         <p id="hora">21:00</p>
//                     </div>
//                 </div>
//             </div>
//     `

// };

const getDestacados = (eventos) => {
    // Obtener el contenedor donde se agregarán los eventos destacados
    const destacadosContainer = document.getElementById('destacados');

    // Limpiar el contenido existente antes de agregar nuevos eventos
    destacadosContainer.innerHTML = '';

    // Iterar sobre los eventos en las posiciones [1] y [2]
    for (let i = 1; i < 3; i++) {
        const evento = eventos[i];
        if (!evento) continue;

        const fechaConvertida = convertirFecha(evento['fecha']);

        // Crear un nuevo div para cada evento destacado
        const nuevoDestacado = document.createElement('div');
        
        nuevoDestacado.innerHTML = `
            <div class="eventoDestacado" style="background-image: url(img/${evento['img']}); background-size: cover;">
                <div class="txtDestacado flexcenter">
                    <div class="fechaDestacado flexcenter">
                        ${fechaConvertida.dia}
                        <span>${fechaConvertida.mes}</span>
                    </div>
                    <div>
                        <h3 id="nombre">${evento['nombre']}</h3>
                        <p id="hora">${fechaConvertida.hora}</p>
                    </div>
                </div>
            </div>
        `;

        // Agregar el evento destacado al contenedor principal
        destacadosContainer.appendChild(nuevoDestacado);
    }
};