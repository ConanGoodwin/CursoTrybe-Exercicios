const { serviceBook } = require("../services");
const typeError = require("../utils/mapErrors");

function finalize(status, type, message, res) {
  if (type) return res.status(typeError[type]).json({ message });

  return res.status(status).json(message);
}

const getAll = async (_req, res) => {
  const { type, message } = await serviceBook.getAll();

  finalize(200, type, message, res);
}

const getById = async (req, res) => {
  const { type, message } = await serviceBook.getById(Number(req.params.id));

  finalize(200, type, message, res);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body
  const { type, message } = await serviceBook.create(title, author, pageQuantity);

  finalize(201, type, message, res);
}

module.exports = {
  getAll,
  getById,
  create
}