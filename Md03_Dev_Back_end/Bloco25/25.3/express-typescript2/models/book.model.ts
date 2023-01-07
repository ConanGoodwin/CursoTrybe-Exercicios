import { Pool, ResultSetHeader } from 'mysql2/promise';
import IBook from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IBook[]> {
    const [rows] = await this.connection.execute<IBook[] & ResultSetHeader>('SELECT * FROM books');

    return rows as IBook[];
  }

  public async create(book: IBook): Promise<IBook> {
    const { title, price, author, isbn } = book;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?,?,?,?)',
      [title, price, author, isbn]
    );
    
    return { id: insertId, ...book };
  }
}