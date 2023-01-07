import IBook from "./book.interface";

interface IServices {
  message: IBook[];
  type: null | 'NOT_FOUND';
}

export default IServices;