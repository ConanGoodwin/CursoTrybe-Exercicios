// src/controllers/user.controller.js

const { User } = require('../services');

const getAll = async (_req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};