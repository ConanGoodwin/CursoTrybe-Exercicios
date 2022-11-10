const { Router } = require('express');
const { requestTravel } = require('../services/passenger.service');
const { mapError } = require('../utils/errorMap');

const route = Router();

route.post('/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const { type, message } = await requestTravel(passengerId, startingAddress, endingAddress, waypoints);

  if (!type) return res.status(201).json(message);

  res.status(mapError(type)).json({ message });
});

module.exports = route;