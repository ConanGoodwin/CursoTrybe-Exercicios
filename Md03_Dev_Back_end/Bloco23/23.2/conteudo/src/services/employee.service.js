const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll(
    { include: { model: Address, as: 'addresses', attributes: { exclude: ['employeeId','id'] } } }
  );

  return users;
}

module.exports = {
  getAll
}