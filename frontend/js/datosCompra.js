const urlParams = new URLSearchParams(window.location.search);
const eventoId = urlParams.get("evento");
var evento = null;


async function getDetallesEvento (){
  evento = await listarEventos(eventoId);
  console.log(evento);
  let contDetalles = document.getElementById('detalles');

  const fechaConvertida = convertirFecha(evento['fecha']);
  contDetalles.innerHTML = `
  
              <figure class="figure">
                  <img class="img" src="img/${evento['portada']}" alt="Portada">
              </figure>
  
              <div class="infoDetalles flexcenter">
                  <div class="fechaPrincipal">
                      ${fechaConvertida.dia}
                      <span class="mes">${fechaConvertida.mes}</span>
                  </div>
                  <h1>${evento['nombre']}</h1>
                  <p class="hora subtitulo">${fechaConvertida.hora}</p>
                  <p>${evento['descripcion']}</p>
              </div>
  
              <div class="btnLeft flexcenter">
                  <a onclick="comprarPasoUno()" class="btnPrincipal">Comprar</a>
              </div>
            `;
}

getDetallesEvento();


// COMPRAR PASO UNO - ENTRADAS

function comprarPasoUno (){
  let contDetalles = document.getElementById('detalles');
  
  const fechaConvertida = convertirFecha(evento['fecha']);

  contDetalles.innerHTML = `
            <figure class="figure">
              <img class="img" src="img/${evento['portada']}" alt="Portada">
            </figure>

            <div class="infoDetalles flexcenter">
              <div class="fechaPrincipal">
              ${fechaConvertida.dia}
                <span class="mes">${fechaConvertida.mes}</span>
              </div>
              <h1>${evento['nombre']}</h1>
              <p class="hora subtitulo">${fechaConvertida.hora}</p>
              <p>${evento['descripcion']}</p>

              <table class="table">
                  <thead>
                      <tr>
                          <th>Tipo de ticket</th>
                          <th>Valor</th>
                          <th>Cant.</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>General</td>
                          <td>$${evento['general']}</td>
                          <td>
                              <select onchange="sumarTotal()" name="cantTicket" id="cantTicketG" class="input">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                          </td>
                      </tr>
                      <tr>
                          <td>VIP</td>
                          <td>$${evento['vip']}</td>
                          <td>
                              <select onchange="sumarTotal()" name="cantTicket" id="cantTicketV" class="input">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>

            <div class="total flexcenter">
              <p class="subtitulo">TOTAL</p>
              <p class="subtitulo" id="total"></p>
            </div>

            <div class="btnLeft flexcenter">
              <a onclick="comprarPasoDos()" class="btnPrincipal">Confirmar</a>
            </div>
          `
}

function sumarTotal (){
  let cantGeneral = document.getElementById('cantTicketG').value;
  let cantVip = document.getElementById('cantTicketV').value;

  let subTotalGeneral = cantGeneral * evento.general
  let subTotalVip = cantVip * evento.vip

  let total = subTotalGeneral + subTotalVip
  document.getElementById("total").innerHTML= "$" + total;
  datoTotal = total
}



// COMPRAR PASO DOS - FORM
var datoGeneral = null;
var datoVip = null;
var datoTotal = null

function comprarPasoDos (){
  datoGeneral = document.getElementById('cantTicketG').value;
  datoVip = document.getElementById('cantTicketV').value;

  if (datoGeneral == 0 && datoVip == 0) {
    alert('Necesitas comprar alguna entrada para seguir con la compra');
    return;
  }

  let contDetalles = document.getElementById('detalles');
  
  const fechaConvertida = convertirFecha(evento['fecha']);

  contDetalles.innerHTML =  `
                <div class="infoDetalles">
                <div class="fechaPrincipal">
                    ${fechaConvertida.dia}
                    <span class="mes">${fechaConvertida.mes}</span>
                </div>
                <h1>${evento['nombre']}</h1>
                <p class="hora subtitulo">${fechaConvertida.hora}</p>

                <form action="GET">
                    <div class="group">
                        <input class="input" type="text" placeholder="Nombre completo">
                    </div>
                    <div class="group">
                        <input class="input" type="text" placeholder="Teléfono">
                    </div>
                    <div class="group">
                        <input class="input" type="text" placeholder="Email">
                    </div>
                    <div class="group">
                        <input class="input" type="text" placeholder="Documento">
                    </div>
                    <div id="contDate" class="group">
                        <label for="date" class="p">Fecha de nacimiento</label>
                        <input type="date" name="date" id="date">
                    </div>
                </form>
                </div>

                <div class="btnLeft flexcenter">
                <a onclick="comprarPasoUno()">
                    <img src="icons/arrow-circle-right.png" alt="">
                </a>

                <a onclick="comprarPasoTres()" class="btnPrincipal">Siguiente</a>
                </div>
                `
}


// COMPRAR PASO TRES - MEDIO PAGO

function comprarPasoTres (){
  let contDetalles = document.getElementById('detalles');

  const fechaConvertida = convertirFecha(evento['fecha']);

  contDetalles.innerHTML =  `
  <div class="infoDetalles">
  <div class="fechaPrincipal">
      ${fechaConvertida.dia}
      <span class="mes">${fechaConvertida.mes}</span>
  </div>
  <h1>${evento['nombre']}</h1>
  <p class="hora subtitulo">${fechaConvertida.hora}</p>

  <form action="GET">
      <div class="flexcenter radioOptions">

          <div class="radio-container">
              <input type="radio" id="MP" name="medioPago" value="mercadopago">
              <label for="medioPago" class="p">
                  <img src="icons/mercadopago.png" alt="Imagen de ejemplo" class="radio-img">
              </label>
              <p class="detalles">Mercado Pago <br> 12 Cuotas sin recargo con todas las tarjetas</p>
          </div>
          <div class="radio-container">
              <input type="radio" id="RP" name="medioPago" value="redpagos">
              <label for="medioPago" class="p">
                  <img src="icons/redpagos.png" alt="Imagen de ejemplo" class="radio-img">
              </label>
              <p class="detalles">Red Pagos <br> Pagar en dentro de las 24hrs en Local</p>
          </div>

      </div>
  </form>
</div>

<div class="total flexcenter">
  <p class="subtitulo">TOTAL</p>
  <p class="subtitulo">$${datoTotal}</p>
</div>

<div class="btnLeft flexcenter">
  <a href="">
      <img src="icons/arrow-circle-right.png" alt="">
  </a>

  <a onclick="estaSeleccionado()" class="btnPrincipal">Siguiente</a>
</div>
  `

}

var valueMedioPago = null;

function estaSeleccionado(){
  const medioPago = document.getElementsByName('medioPago');
  
  let seleccionado = null;
  for (const option of medioPago) {
    if (option.checked) {
      seleccionado = option.value;
    }
  }

  if (seleccionado != null){
    comprarPasoCuatro()
  } else{
    alert('Ninguna opción seleccionada');
  }

  valueMedioPago = seleccionado
}


// COMPRA PASO CUATRO - VERIFICACION

function comprarPasoCuatro (){
  comprarPasoCinco();
  setTimeout(()=>{
    comprarPasoSeis();
  }, 2000);
}

function comprarPasoCinco (){

  let contDetalles = document.getElementById('detalles');

  const fechaConvertida = convertirFecha(evento['fecha']);

  contDetalles.innerHTML = `
            <div class="infoDetalles">
            <div class="fechaPrincipal">
                ${fechaConvertida.dia}
                <span class"mes">${fechaConvertida.mes}</span>
            </div>
            <h1>${evento['nombre']}</h1>
            <p class="hora subtitulo">${fechaConvertida.hora}</p>

            <div class="verificacion flexcenter">
                <p>Verificando pago</p>
                <img src="icons/verified.gif" alt="">
            </div>

          </div>

          <div class="total flexcenter">
            <p class="subtitulo">TOTAL</p>
            <p class="subtitulo">$${datoTotal}</p>
          </div>

          <div class="btnLeft flexcenter">
            <a>
                <img src="icons/arrow-circle-right.png" alt="">
            </a>

            <a class="btnPrincipal">Siguiente</a>
          </div>
  
  `
}



// COMPRAR PASO SEIS - FINALIZACION

function comprarPasoSeis (){

  let contDetalles = document.getElementById('detalles');

  const fechaConvertida = convertirFecha(evento['fecha']);

  let textoEntrada = '';
    if (datoGeneral > 0) {
      textoEntrada += `<p id="ticket">General x ${datoGeneral}</p>`
    }

    if (datoVip > 0) {
      textoEntrada += `<p id="ticket">VIP x ${datoVip}</p>`
    }


  contDetalles.innerHTML = `
                <div class="infoDetalles">
                <div class="fechaPrincipal">
                    ${fechaConvertida.dia}
                    <span class="mes">${fechaConvertida.mes}</span>
                </div>
                <h1>${evento['nombre']}</h1>
                <p class="hora subtitulo">${fechaConvertida.hora}</p>

                <div class="qr flexcenter">
                    
                    ${textoEntrada}
                    <div id="qrcode">
                    </div>
                    <p id="codigo" class="subtitulo">#ERS1256</p>
                    <p class="subtitulo">Enviada con éxito</p>
                    <p class="detalles">Guarda la foto o realiza una screenshot para tener el código QR en el momento de entrar al evento. Se debe tener en cuenta que puede ser utilizado una única vez.</p>
                </div>

                <div class="flexcenter">
                  <a href="index.html" class="btnSimple">Volver al inicio</a>
                </div>
              </div>
  
  `
}