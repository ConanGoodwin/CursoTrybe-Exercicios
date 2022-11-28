const express = require('express');
require('dotenv').config();
require('express-async-errors');
const { errorFunc } = require('./middlewares');
const { routeBook } = require('./routers');

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, ()=> console.log(`Escutando na porta ${PORT}`));

app.use('/book', routeBook);
app.use(errorFunc);