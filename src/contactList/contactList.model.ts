import * as Sequelize from 'sequelize';
import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { sequelize } from '../servers.js';
import { Contact } from '../contact/contact.model.js';
import { List } from '../list/list.model.js';

@Table
export class ContactList extends Model {
  @ForeignKey(() => Contact)
  @Column
  contactUuid!: string;

  @ForeignKey(() => List)
  @Column
  listUuid!: string;
}

ContactList.init(
  {
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    contactUuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false,
    },
    listUuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'contactlist',
  }
);

ContactList.sync();
