import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Authors extends Model {
  declare id: number;
  declare name: string;
}

Authors.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
  underscored: true
});

export default Authors;