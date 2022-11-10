const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [ result ] = await connection.execute('SELECT * FROM passengers');

  return camelize(result);
}

const findById = async (passengerId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );

  return camelize(result);
};

module.exports = {
  findAll,
  findById,
}