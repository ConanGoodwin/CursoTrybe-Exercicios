'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const teste = sequelize.define('teste',{
    name: DataTypes.STRING
  }, {});

  return teste;
};