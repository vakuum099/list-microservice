import * as Sequelize from 'sequelize';
import { BelongsToMany, Model, Table } from 'sequelize-typescript';
import { sequelize } from '../servers';
import { Contact } from '../contact/contact.model';
import { ContactList } from '../contactList/contactList.model';
import { ListAttributes, ListCreationAttribute } from './list.interfaces';

@Table
export class List extends Model<ListAttributes, ListCreationAttribute> {
  @BelongsToMany(() => Contact, () => ContactList)
  contacts!: Array<typeof Contact & { ContactList: ContactList }>;
}

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
