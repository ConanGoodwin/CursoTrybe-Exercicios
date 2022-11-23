const BookService = require('../services/books.service');

const getAll = async (_req, res) => {
  const message = await BookService.getAll();

  res.status(200).json(message);
}

module.exports = {
  getAll
}