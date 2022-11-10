const { travelModel, passengerModel, waypointModel } = require('../models');
const { validateRequestTravelSchema } = require('./validations/validationsInputValues');

const doesPassengerExist = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);

  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => await waypointModel.insert({ ...value, travelId }));
  }
  return [];
};

const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
  const validationResult = validateRequestTravelSchema(passengerId, startingAddress, endingAddress, waypoints);

  if (validationResult.type) return validationResult;
  if (await doesPassengerExist(passengerId)) {
    const travelId = await travelModel.insert({ passengerId, startingAddress, endingAddress });

    await Promise.all(saveWaypoints(waypoints, travelId));
    const travel = await travelModel.findById(travelId);

    return { type: null, message: travel };
  }

  return { type: 'INVALID_VALUE', message: `Passager id ${passengerId} not found` };
};


module.exports = {
  requestTravel,
};