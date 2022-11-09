const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );

  return camelize(result);
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );

  return camelize(result);
};

const setDriver = async (travelId, driverId) => {
  const [result] = await connection.execute(
    'UPDATE travels SET driver_id = ? WHERE id = ?',
    [driverId, travelId],
  );

  return camelize(result.changedRows);
};

const setStatus = async (status, travelId, driverId) => {
  const [result] = await connection.execute(
    'UPDATE travels SET travel_status_id = ? WHERE id = ? AND driver_id = ?',
    [status, travelId, driverId],
  );
  
  return camelize(result.changedRows);
};

module.exports = {
  insert,
  findById,
  findByTravelStatusId,
  setDriver,
  setStatus,
};
