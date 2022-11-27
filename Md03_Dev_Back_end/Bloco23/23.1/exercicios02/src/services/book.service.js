const { Book } = require('../models');

const getAll = async () => {
  try {
    const message = await Book.findAll();
    
    if (message.length > 0) return { type: null, message };

    return { type: 'NOT_FIND_BOOKS', message };
  } catch (error) {
    const err = new Error('Faild connect to DB');
    err.type = 'ERROR_CONECTION';
    throw err;
  }
}

module.exports = {
  getAll
}