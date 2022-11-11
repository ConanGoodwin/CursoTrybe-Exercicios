const { Router } = require('express');
const { travelModel } = require('../models');
const { passengerService, driverService } = require('../services');
const { mapError } = require('../utils/errorMap');

const route = Router();

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

route.get('/open/travels', async (_req, res) => {
  const { type, message } = await driverService.getWaitingDriverTravels();

  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
});

route.get('/', async (_req,res) => {
  const { type, message } = await driverService.findAll();

  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
});

route.put('/:driverId/travels/:travelId/assign', async (req, res) => {
  // const { travelId, driverId } = req.params;

  const { type, message } = await driverService.travelAssign(req.params);

  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
});

route.put('/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.setStatus(TRAVEL_IN_PROGRESS, travelId, driverId);
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

route.put('/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.setStatus(TRAVEL_FINISHED, travelId, driverId);
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

module.exports = route;