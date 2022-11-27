const { Router } = require('express');
const { controllerBook } = require('../controllers');

const routeBook = Router();

routeBook.get('/', controllerBook.getAll);

module.exports = routeBook