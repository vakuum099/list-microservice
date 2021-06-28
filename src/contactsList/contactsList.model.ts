import * as Sequelize from 'sequelize';
import { sequelize as sequelize } from '../servers';
import { IContactsList } from './contactsList.interface';

export class ContactsList extends Sequelize.Model<IContactsList> {
    [x: string]: any;
}

ContactsList.init(
  {
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    listId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: false,
        allowNull: false,
        unique: false,
      },
    contactId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: false,
        allowNull: false,
        unique: false,
      },
  },
  {
    sequelize,
    modelName: 'contactsList',
  }
);

ContactsList.sync();