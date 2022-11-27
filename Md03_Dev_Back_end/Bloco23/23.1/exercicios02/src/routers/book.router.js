const { Router } = require('express');
const { controllerBook } = require('../controllers');

const routeBook = Router();

routeBook.get('/', controllerBook.getAll);
routeBook.get('/:id', controllerBook.getById);
routeBook.post('/', controllerBook.create);

module.exports = routeBook