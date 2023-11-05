// imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// await mongodb
await connectDB();

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
require('./connection');

app.listen(port, () => {
    console.log(`Server corriendo en el ${port}`);
});
