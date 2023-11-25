// ACA VAN LOS DATOS QUE TIENEN QUE CARGARSE DINAMICAMENTE PARA EL PRIMER EVENTO

window.onload = () => {
    fetch('http://localhost:3000/listEventos', {
        method: 'POST'
      })
        .then(response => response.json())
        .then(data => {
          console.log('Listado de eventos:', data);
        // ACA VAN LAS COSAS QUE TIENEN QUE CARGAR
          getHeader(data.message);
        })
        .catch(error => {
          console.error('Error al listar eventos:', error);
        });

};


const getHeader = (data) => {
    const header = document.getElementById('header');
    let html = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
        html += `
                <header>
                    <div>
                        <a class="logo" href="/">
                            <img src="img/logo.png" alt="MMB">
                        </a>
                        
                        <nav class="flexcenter">
                            <a class="btnMenu" href="/eventos">EVENTOS</a>
                            <a class="btnMenu" href="/lasala">LA SALA</a>
                            <a class="btnMenu" href="/contacto">CONTACTO</a>
                        </nav>
                    </div>
                </header>
    
                <div id="txtPrincipal">
                        <div id="fechaPrincipal">
                            06
                            <span>OCT</span>
                        </div>
                    <h1>${element['nombre']}</h1>
                    <p>21:00</p>
                    <p class="subtitulo">${element['descripcion']}</p>
                    <a class="btnPrincipal" href="">Comprar entradas</a>
                </div>

                <style>
                    #header{
                    background-image: url(${element['portada']});
                    }
                </style>
        `
    }

    header.innerHTML = html;
};

const getEventos = (data) => {
    const listado = document.getElementById('listado');
    let html = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
        html += `
                <div class="evento">
        `
    }

    listado.innerHTML = html;
};