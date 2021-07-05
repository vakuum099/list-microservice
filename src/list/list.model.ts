import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Contact } from '../contact/contact.model';
import { ContactList } from '../contactList/contactList.model';
import { ListAttributes, ListCreationAttribute } from './list.interfaces';
import { UUID, UUIDV4 } from 'sequelize';

@Table
export class List extends Model<ListAttributes, ListCreationAttribute> {
  @BelongsToMany(() => Contact, () => ContactList)
  contacts!: Array<typeof Contact & { ContactList: ContactList }>;

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
}
