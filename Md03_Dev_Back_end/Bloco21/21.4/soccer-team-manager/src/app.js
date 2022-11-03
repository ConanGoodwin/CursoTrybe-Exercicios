// src/app.js
const express = require('express');
const route = require('./routes/rotas');

const app = express();

app.use(express.json());
app.use(route);



// GET / HTTP/1.1
// Host: developer.mozilla.org
// Accept: text/html

module.exports = app;