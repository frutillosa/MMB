import qr from "qr-image";

const createCodigo = () => {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let codigo = "";

  for (let i = 0; i < 3; i++) {
    const letraRandom = letras.charAt(
      Math.floor(Math.random() * letras.length)
    );
    codigo += letraRandom;
  }

  for (let i = 0; i < 4; i++) {
    const numeroRandom = Math.floor(Math.random() * 10);
    codigo += numeroRandom;
  }

  return codigo;
};

const generarCodigoQR = (codigo) => {
  const qr_png = qr.image(codigo, { type: "png" });
  return `data:image/png;base64,${qr_png.toString("base64")}`;
};

export default {
  createCodigo,
  generarCodigoQR,
};
