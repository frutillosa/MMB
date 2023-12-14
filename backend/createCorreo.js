import { config } from "dotenv";
import qr from "qr-image";
import nodeMailer from "nodemailer";
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

const generarCodigoQR = async (codigo) => {
  const qrStream = qr.image(codigo, { type: "png" });
  let qrBuffer = Buffer.from([]);
  for await (const chunk of qrStream) {
    qrBuffer = Buffer.concat([qrBuffer, chunk]);
  }
  return `data:image/png;base64,${qrBuffer.toString("base64")}`;
};
config();

const user = process.env.USER;
const password = process.env.PASSWORD;

const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: password,
  },
});

const emailHandler = async (req, res) => {
  const { to } = req.body;
  const codigo = createCodigo();
  const qrCodeImage = await generarCodigoQR(codigo);
  const html = `

  <div class="infoDetalles">
      <div class="fechaPrincipal">
          06
          <span class="mes">OCT</span>
      </div>
      <h1>Samurai</h1>
      <p class="hora subtitulo">21:00</p>
  
      <div class="qr flexcenter">
          <p id="ticket">General x 1</p>
          <div id="qrcode">
          <img src="${qrCodeImage}" alt="QR Code" />
          </div>
          <p id="codigo" class="subtitulo">#ERS1256</p>
          <p class="subtitulo">Enviada con éxito</p>
          <p class="detalles">Guarda la foto o realiza una screenshot para tener el código QR en el momento de entrar al evento. Se debe tener en cuenta que puede ser utilizado una única vez.</p>
      </div>
  
  </div>
  <style>
  .qr{
    flex-direction: column;
    gap: 1rem;
  }
  
  #qrcode{
    width: 12rem;
  }
  
  #codigo{
    color: #E2A555;
  }
  
  .txtDestacado{
    justify-content: flex-start;
    gap: 1rem;
    overflow: hidden;
  }
  
  .fechaDestacado{
      margin: 1rem 0;
      background-color: var(--black);
      color: var(--white);
      padding: 0.5rem;
      border-radius: 10px;
      font-size: 2.25rem;
      text-align: center;
      line-height: 2rem;
      flex-direction: column;
  
      width: 5.25rem;
      height: 5.25rem;
  }
  
  
  .fechaDestacado span{
    font-size: 1.5rem;
  }
  
  .subtitulo{
    color: var(--white);
    font-size: 24px;
    text-shadow: 0px 0px 18px #000000;
  }
  
  .detalles{
    color: var(--white);
    font-size: 14px;
    text-align: justify;
  }
  </style>
  `;
  const mailOptions = {
    from: user,
    to: to,
    subject: "Montevideo Music Box - Tus e-tickets están listos",
    text: "¡Hola! Tus e-tickets están listos para descargar. Ingresá a tu cuenta en Montevideo Music Box y descargalos. ¡Nos vemos en el show!",
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
};

export default emailHandler;
