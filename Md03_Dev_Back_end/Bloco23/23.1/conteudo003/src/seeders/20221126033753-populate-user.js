'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'John Doe',
        email: 'teste@teste.com'
      },
      {
        fullName: 'Ze da Silva',
        email: 'teste2@teste.com'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
