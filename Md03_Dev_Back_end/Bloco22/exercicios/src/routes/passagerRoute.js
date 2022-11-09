const { Router } = require('express');
const { travelModel, passagerModel } = require('../models');
const connection = require('../models/connection');

const route = Router();

const doesPassengerExist = async (passengerId) => {
  const passenger = await passagerModel.findById(passengerId);

  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => connection.execute(
      'INSERT INTO waypoints (address, stop_order, travel_id) VALUE (?, ?, ?)',
      [value.address, value.stopOrder, travelId],
    ));
  }
  return [];
};

route.post('/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  if (await doesPassengerExist(passengerId)) {
    const travelId = await travelModel.insert({ passengerId, startingAddress, endingAddress });
    await Promise.all(saveWaypoints(waypoints, travelId));

    const travel = await travelModel.findById(travelId);
    return res.status(201).json(travel);
  }

  res.status(500).json({ message: 'Ocorreu um erro' });
});

module.exports = route;