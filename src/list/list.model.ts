import * as Sequelize from 'sequelize';
import { sequelize as sequelize } from '../servers';
import { IList } from './list.interfaces';

export class List extends Sequelize.Model<IList> {}

List.init(
  {
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'list',
  }
);

List.sync();