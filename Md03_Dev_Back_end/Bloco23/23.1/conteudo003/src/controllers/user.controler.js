const userService = require('../services/user.service');

const getAll = async (_req,res) => {
  res.status(200).json(await userService.getAll());
}

const getById = async (req,res) => {
  res.status(200).json(await userService.getById(Number(req.params.id)));
} 

const getByIdAndEmail = async (req,res) => {
  res.status(200).json(await userService.getByIdAndEmail(Number(req.params.id), req.query.email));
}

const createUser = async (req,res) => {
  const array = req.body;
  const respArray = [];

  await Promise.all(
    array.map(async ({ fullName, email }) => {
      respArray.push(await userService.createUser(fullName, email));
    })
  );

  res.status(201).json(respArray);
}

const updateUser = async (req,res) => {
  res.status(200).json(await userService.updateUser(Number(req.params.id), req.body.fullName, req.body.email));
}

const deleteUser = async (req,res) => {
  res.status(204).json(await userService.deleteUser(Number(req.params.id)));
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser
}
