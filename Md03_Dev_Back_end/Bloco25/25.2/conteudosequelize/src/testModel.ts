import Books from "./database/models/BookModel";
import Comments from "./database/models/CommentModel";

(async () => {
  const books = await Books.findAll({ raw: true });
  console.table(books);
  const comments = await Comments.findAll({ raw: true });
  console.table(comments);
  const booksWithCommets = await Books.findAll({ raw: true, include: [{ model: Comments, as: 'comments', attributes: { exclude: ['bookId'] } }] });
  console.table(booksWithCommets);
  process.exit(0);
})(); 