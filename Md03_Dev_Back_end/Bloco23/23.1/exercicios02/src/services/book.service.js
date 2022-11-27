const { Book } = require('../models');

const getAll = async () => {
  try {
    const message = await Book.findAll();

    if (message.length>0) return { type: null, message };

    return { type: 'NOT_FIND_BOOKS', message: 'Table books not contain a book' };
  } catch (error) {
    const err = new Error('Faild connect to DB');
    err.type = 'ERROR_CONECTION';
    throw err;
  }
}

const getById = async (id) => {
  try {
    const message = await Book.findByPk(id);

    if (message) return { type: null, message };

    return { type: 'NOT_FIND_BOOKS', message: `Not find a book with id ${id}` };
  } catch (error) {
    const err = new Error('Faild connect to DB');
    err.type = 'ERROR_CONECTION';
    throw err;
  }
}

module.exports = {
  getAll,
  getById
}