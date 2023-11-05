

// express
const express = require('express');

const app = express();
const port = 3000;

// cors
const cors = require('cors');
app.use(cors());

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// listen del port
require('./database/conexion');

app.listen(port, () => {
    console.log(`Server corriendo en el ${port}`);
});