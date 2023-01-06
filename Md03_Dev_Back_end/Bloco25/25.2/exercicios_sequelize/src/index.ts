import Books from "./database/models/BookModels";
import Authors from "./database/models/AuthorModel";
import sequelize, { Sequelize } from "sequelize";

(async () => {
  const authors = await Authors.findAll({ raw: true });
  console.table(authors);
  const booksPerAuthors = await Books.findAll({
    raw: true,
    group: [ 'books.author_id' ],
    attributes: ['author.name', [sequelize.fn('count', Sequelize.col('books.id')), 'totalBooks']],
    include: [{ attributes: [], model: Authors }],
  });
  console.table(booksPerAuthors);
  // console.log(booksPerAuthors);
  process.exit(0);
})();