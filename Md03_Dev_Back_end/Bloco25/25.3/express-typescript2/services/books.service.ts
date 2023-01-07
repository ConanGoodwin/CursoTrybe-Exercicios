// ./services/books.service.ts
import connection from "../models/connection";
import BookModel from "../models/book.model";
import IServices from "../interfaces/services.interface";

export default class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<IServices> {
    const message = await this.model.getAll();

    if(message) return { type: null, message };

    return { type: 'NOT_FOUND', message };
  }
}