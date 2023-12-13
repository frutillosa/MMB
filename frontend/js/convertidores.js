// CONVERTIDOR DE FECHA

function convertirFecha(fechaString) {
    const fecha = new Date(fechaString);

    // Obtener día del mes
    const dia = fecha.getDate();

    // Obtener mes con las tres primeras letras
    const mes = obtenerMesTresLetras(fecha.getMonth());

    // Obtener hora y minutos en formato "hora:minutos"
    const hora = agregarCeroAlInicio(fecha.getHours());
    const minutos = agregarCeroAlInicio(fecha.getMinutes());

    return {
        dia: dia,
        mes: mes,
        hora: `${hora}:${minutos}`
    };
}

function obtenerMesTresLetras(numeroMes) {
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    return meses[numeroMes];
}

function agregarCeroAlInicio(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

// GENERADOR DE QR
// el url se suplanta por el text del codigo de la compra
// var qrcode = new QRCode(document.getElementById("qrcode"), {
//     text: "https://www.google.com",
//     width: 128,
//     height: 128,
//     colorDark: "#4e4e4e",
//     colorLight: "white",
//   });


