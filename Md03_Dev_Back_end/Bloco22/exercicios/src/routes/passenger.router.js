const { Router } = require('express');
const { createTravel } = require('../controllers/passenger.controller');

const route = Router();

route.post('/:passengerId/request/travel', createTravel);

module.exports = route;