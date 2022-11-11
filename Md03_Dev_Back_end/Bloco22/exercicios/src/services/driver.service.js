const { travelModel, driverModel } = require('../models');
const {
  validateInputValues,
  validateAlreadyDriver,
} = require('./validations/validationsInputValues');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);

  if (result.length > 0) return { type: null, message: result };

  return { type: 'TRAVEL_NOT_FOUND', message: 'Not found waiting travel' };
}

const findAll = async () => {
  const result = await driverModel.findAll();

  if (result.length > 0) return { type: null, message: result };

  return { type: 'DRIVER_NOT_FOUND', message: 'Not found driver' };
}

const travelAssign = async ({ travelId, driverId }) => {
  let error  = await validateInputValues({ travelId, driverId });

  if (error.type) return error;

  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  await travelModel.setDriver(travelId, driverId);
  await travelModel.setStatus(DRIVER_ON_THE_WAY, travelId, driverId);

  const result = await travelModel.findById(travelId);
  return { type: null, message: result };
}

module.exports = {
  getWaitingDriverTravels,
  findAll,
  travelAssign,
  // startTravel,
  // endTravel
};
