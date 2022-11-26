const { User } = require('../models');

const getAll = async () => {
  return await User.findAll();
}

const getById = async (userId) => {
  return await User.findByPk(userId);
}

module.exports = {
  getAll,
  getById,
}