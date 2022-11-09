const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [ result ] = connection.execute('SELECT * FROM drivers');

  console.log(result);
}

module.exports = {
  findAll,
}