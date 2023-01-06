import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Authors from './AuthorModel';

class Books extends Model {
  declare id: number;
  declare title: string;
  declare bookId: number;
  declare genreId: number; 
}

Books.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    bookId: {
      type: INTEGER,
      allowNull: false
    },
    genreId: {
      type: INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
    underscored: true
  }
);

Books.belongsTo(Authors);
Authors.hasMany(Books);

export default Books;