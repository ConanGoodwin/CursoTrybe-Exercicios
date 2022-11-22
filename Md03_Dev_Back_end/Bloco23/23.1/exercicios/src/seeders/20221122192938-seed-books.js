'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Historia sem fim',
      author: 'Aquele alemão',
      pageQuantity: 300,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Historia com fim',
      author: 'Eu',
      pageQuantity: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
