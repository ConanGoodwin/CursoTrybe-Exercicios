const express = require('express');
require('dotenv').config();
const userController = require('./controllers/user.controler');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=> console.log(`escutando na porta ${PORT}`));

app.get('/user/search/:id', userController.getByIdAndEmail);
app.get('/user/:id', userController.getById);
app.get('/user', userController.getAll);
app.post('/user', userController.createUser);
app.put('/user/:id', userController.updateUser);
app.delete('/user/:id', userController.deleteUser);
