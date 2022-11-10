const { Router } = require('express');
const { driverModel, travelModel } = require('../models');

const route = Router();

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

route.get('/open/travels', async (_req, res) => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);

  res.status(200).json(result);
});

route.get('/', async (_req,res) => {
  const result = await driverModel.findAll();

  res.status(200).json(result);
});

route.put('/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.setDriver(travelId, driverId);
  await travelModel.setStatus(DRIVER_ON_THE_WAY, travelId, driverId);
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
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