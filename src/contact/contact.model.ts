import * as Sequelize from 'sequelize';
import { Table, Model, BelongsToMany } from 'sequelize-typescript';
import { sequelize } from '../servers.js';
import { List } from '../list/list.model.js';
import { ContactList } from '../contactList/contactList.model.js';
import { ContactAttributes, ContactCreationAttribute } from './contact.interfaces';

@Table
export class Contact extends Model<ContactAttributes, ContactCreationAttribute> {
  @BelongsToMany(() => List, () => ContactList)
  lists!: Array<List & { ContactList: ContactList }>;
}

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

Contact.belongsToMany(List, { through: 'contactlist' });
List.belongsToMany(Contact, { through: 'contactlist' });

Contact.sync();
