const { Router } = require('express');
const { controllerBook } = require('../controllers');

const routeBook = Router();

routeBook.get('/', controllerBook.getAll);
routeBook.get('/:id', controllerBook.getById);

module.exports = routeBook