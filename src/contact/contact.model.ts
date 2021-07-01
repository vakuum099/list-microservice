import { UUID, UUIDV4 } from 'sequelize';
import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import { List } from '../list/list.model.js';
import { ContactList } from '../contactList/contactList.model.js';
import { ContactAttributes, ContactCreationAttribute } from './contact.interfaces';

@Table
export class Contact extends Model<ContactAttributes, ContactCreationAttribute> {
  @BelongsToMany(() => List, () => ContactList)
  lists!: Array<List & { ContactList: ContactList }>;

  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  uuid!: string;

  @Column({ field: 'name' })
  name!: string;

  @Column({ field: 'email' })
  email!: string;
}
