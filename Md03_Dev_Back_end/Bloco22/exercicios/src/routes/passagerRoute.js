const { Router } = require('express');
const { requestTravel } = require('../services/passager.service');

const route = Router();

route.post('/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const result = await requestTravel(passengerId, startingAddress, endingAddress, waypoints);

  if (!result.type) return res.status(201).json(result.message);

  res.status(500).json({ message: result.message });
});

module.exports = route;