const userService = require('../services/user.service');

const getAll = async (_req,res) => {
  res.status(200).json(await userService.getAll());
}

const getById = async (req,res) => {
  res.status(200).json(await userService.getById(Number(req.params.id)));
} 

module.exports = {
  getAll,
  getById,
}