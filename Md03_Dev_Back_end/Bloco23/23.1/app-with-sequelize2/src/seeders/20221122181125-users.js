'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users',
      [
        {
          fullName: 'Leonardo',
          email: 'leo@test.com',
          phoneNum: '333',
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          fullName: 'JEduardo',
          email: 'edu@test.com',
          phoneNum: '333',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {});
  }
};
