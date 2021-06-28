import * as Sequelize from 'sequelize';
import { sequelize } from '../servers.js';
import { IContact } from './contact.interfaces';

export class Contact extends Sequelize.Model<IContact> {}

Contact.init(
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
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'contact',
  }
);

Contact.sync();