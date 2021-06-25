import * as Sequelize from 'sequelize';
import { microSequelize as sequelize } from '../servers.js';
import { IContact } from './contact.interfaces.js';

export class Contact extends Sequelize.Model<IContact> {}

Contact.init(
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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'list',
  }
);
