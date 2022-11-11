const { travelModel } = require('../models');
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

module.exports = {
  getWaitingDriverTravels
};
