'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Address=sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    uderscored: true,
    tableName: 'addresses',
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,{
      foreignKey: 'employeeId', as: 'employees'
    });
  }

  return Address;
};