const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, ()=> console.log(`Escutando na porta ${PORT}`));