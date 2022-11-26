const { User } = require('../models');

const getAll = async () => {
  return await User.findAll();
}

module.exports = {
  getAll,
}