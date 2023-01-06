'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Código Limpo',
          author_id: 1,
          genre_id: 1,
        },
        {
          title: 'Refatoração',
          author_id: 2,
          genre_id: 1,
        },
        {
          title: 'Padrões de Projetos',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'nao sei',
          author_id: 3,
          genre_id: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
