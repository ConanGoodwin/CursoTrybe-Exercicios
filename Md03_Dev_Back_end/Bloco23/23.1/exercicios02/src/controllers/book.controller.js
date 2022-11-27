const { serviceBook } = require("../services");
const typeError = require("../utils/mapErrors");

const getAll = async (_req, res) => {
  const { type, message } = await serviceBook.getAll();

  if (type) return res.status(typeError[type]).json(message);

  return res.status(200).json(message);
}

module.exports = {
  getAll
}