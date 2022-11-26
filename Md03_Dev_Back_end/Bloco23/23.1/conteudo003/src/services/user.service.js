const { User } = require('../models');

const getAll = async () => {
  return await User.findAll();
}

const getById = async (userId) => {
  return await User.findByPk(userId);
}

const getByIdAndEmail = async (id, email) => {
  return await User.findOne({ where: { id, email } });
}

const createUser = async (fullName, email) => {
  return await User.create({ fullName, email });
}

const updateUser = async (id, fullName, email) => {
  const [result] = await User.update({ fullName, email }, { where: { id }});

  return result;
}

const deleteUser = async (id) => {
  const result = await User.destroy({ where: { id } });
  // console.log((result));
  return result; 
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
}