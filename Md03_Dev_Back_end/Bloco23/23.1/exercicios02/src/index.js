const express = require('express');
const { errorFunc } = require('./middlewares');
const { routeBook } = require('./routers');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, ()=> console.log(`Escutando na porta ${PORT}`));

app.use('/book', routeBook);
app.use(errorFunc);