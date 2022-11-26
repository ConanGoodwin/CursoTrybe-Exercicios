'use strict';
const { define } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Book = define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
    underscored: true,
  });

  return Book;
};