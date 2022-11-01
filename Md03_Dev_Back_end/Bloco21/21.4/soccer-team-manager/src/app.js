// src/app.js
const OK = 200;
// const INTERNAL_SERVER_ERROR = 500;
// const NOT_FOUND = 404;
const express = require('express');
const route = require('./routes/rotas');

const app = express();

app.use(express.json());
app.use(route);



// GET / HTTP/1.1
// Host: developer.mozilla.org
// Accept: text/html

module.exports = app;