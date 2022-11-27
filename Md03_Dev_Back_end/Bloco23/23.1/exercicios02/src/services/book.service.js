const { Book } = require('../models');

const getAll = async () => {
  try {
    const message = await Book.findAll();
    
    if (message.length > 0) return { type: null, message }

    return { type: 'NOT_FIND_BOOKS', message }
  } catch (error) {
    error.type = 'ERROR_CONECTION'
    throw error;
  }
}

module.exports = {
  getAll
}