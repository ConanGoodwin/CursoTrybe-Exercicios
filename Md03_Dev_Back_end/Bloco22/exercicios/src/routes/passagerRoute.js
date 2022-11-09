const { Router } = require('express');
const { travelModel } = require('../models');
const { requestTravel } = require('../services/passenger.service');

const route = Router();

route.post('/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const result = await requestTravel(passengerId, startingAddress, endingAddress, waypoints);

  if (result) return res.status(201).json(result);

  res.status(500).json({ message: 'Ocorreu um erro' });
});

module.exports = route;