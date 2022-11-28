const { Book } = require('../models');

function throwError() {
  const err = new Error('Faild connect to DB');
    err.type = 'ERROR_CONECTION';
    throw err;
}

const getAll = async () => {
  try {
    const message = await Book.findAll();

    if (message.length>0) return { type: null, message };

    return { type: 'NOT_FIND_BOOKS', message: 'Table books not contain a book' };
  } catch (error) {
    throwError();
  }
}

const getById = async (id) => {
  try {
    const message = await Book.findByPk(id);

    if (message) return { type: null, message };

    return { type: 'NOT_FIND_BOOKS', message: `Not find a book with id ${id}` };
  } catch (error) {
    throwError();
  }
}

const create = async (title, author, pageQuantity) => {
  try {
    const message = await Book.create({ title, author, pageQuantity });

    if (message) return { type: null, message };

    return { type: 'NOT_CREATE_BOOK', message: `Faild insert the book` };
  } catch (error) {
    throwError();
  }
}

const update = async (id, title, author, pageQuantity) => {
  try {
    const { type, message } = await getById(id);

    if (type) return { type, message };

    const result = await Book.update({ title, author, pageQuantity }, { where: { id } });

    if (result) return { type: null, message: result };

    return { type: 'NOT_UPDATE_BOOK', message: `Faild update id ${id}` };
  } catch (error) {
    throwError();
  }
}

const remove = async (id) => {
  try {
    const { type, message } = await getById(id);

    if (type) return { type, message };

    const result = await Book.destroy({ where: { id } });

    if (result) return { type: null, message: result };

    return { type: 'NOT_DELETE_BOOK', message: `Faild delete id ${id}` };
  } catch (error) {
    throwError();
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}