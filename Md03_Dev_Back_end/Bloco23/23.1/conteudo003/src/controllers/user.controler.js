const userService = require('../services/user.service');

const getAll = async (_req,res) => {
  res.status(200).json(await userService.getAll());
}

module.exports = {
  getAll,
}