'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('employees', [
      {
        id: 1,
        first_name: 'Marcos',
        last_name: 'Zuck',
        age: 49,
      },
      {
        id: 2,
        first_name: 'Fred',
        last_name: 'Mercurio',
        age: 19,
      },
      {
        id: 3,
        first_name: 'Ayrton',
        last_name: 'Keno',
        age: 51,
      },
      {
        id: 4,
        first_name: 'Robin',
        last_name: 'Mathias',
        age: 63,
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
