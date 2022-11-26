const express = require('express');
require('dotenv').config();
const userController = require('./controllers/user.controler');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=> console.log(`escutando na porta ${PORT}`));

app.use('/user/:id', userController.getById);
app.use('/user', userController.getAll);
