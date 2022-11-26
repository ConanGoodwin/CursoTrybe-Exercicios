'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'User',
    underscored: true,
  });

  return User;
};