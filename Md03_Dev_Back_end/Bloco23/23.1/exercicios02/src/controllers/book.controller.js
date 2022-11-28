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

const update = async (req, res) => {
  const { title, author, pageQuantity } = req.body
  const { type } = await serviceBook.update(Number(req.params.id),title, author, pageQuantity);

  if (type==='NOT_FIND_BOOKS') return res.status(404).json({ message: 'Book not found!' });

  finalize(200, type, { message: 'Book updated!' }, res);
}

const remove = async (req, res) => {
  const { type } = await serviceBook.remove(Number(req.params.id));

  if (type==='NOT_FIND_BOOKS') return res.status(404).json({ message: 'Book not found!' });

  finalize(204, type, { message: 'Book deleted!' }, res);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}