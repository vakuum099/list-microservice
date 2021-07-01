import { UUID, UUIDV4 } from 'sequelize';
import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Contact } from '../contact/contact.model.js';
import { List } from '../list/list.model.js';

@Table
export class ContactList extends Model {
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  uuid!: string;

  @ForeignKey(() => Contact)
  @Column
  contactUuid!: string;

  @ForeignKey(() => List)
  @Column
  listUuid!: string;
}
