'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'John Doe',
        email: 'teste@teste.com'
      },
      {
        full_name: 'Ze da Silva',
        email: 'teste2@teste.com'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
