'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('authors', [
      {
        name: 'Robert C Martin',
      },
      {
        name: 'Martin Fowler',
      },
      {
        name: 'Erich Gamma',
      }
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
