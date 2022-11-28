const { Router } = require('express');
const { controllerBook } = require('../controllers');

const routeBook = Router();

routeBook.get('/', controllerBook.getAll);
routeBook.get('/:id', controllerBook.getById);
routeBook.post('/', controllerBook.create);
routeBook.put('/:id', controllerBook.update);
routeBook.delete('/:id', controllerBook.remove);

module.exports = routeBook