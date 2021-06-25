import * as Sequelize from 'sequelize';
import { microSequelize as sequelize } from '../servers.js';
import { IList } from './list.interfaces.js';

class List extends Sequelize.Model<IList> {}
List.init(
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'list',
  }
);
