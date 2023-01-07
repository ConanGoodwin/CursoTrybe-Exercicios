import { Request, Response } from 'express';
import statusCode from '../statusCodes';
import BookService from '../services/books.service';

export default class BookController {
  constructor(private bookservice = new BookService()) {};

  public getAll = async(_req: Request, res: Response) => {
    const { type, message } = await this.bookservice.getAll();

    if(type) return res.status(statusCode[type]).json(message);

    return res.status(statusCode.OK).json(message);
  }
}