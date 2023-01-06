'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('genres', [
      {
        genre: 'SciFi'
      },
      {
        genre: 'NoFi'
      }
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.bulkDelete('genres', null, {});
  }
};
