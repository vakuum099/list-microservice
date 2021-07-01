import { Optional } from 'sequelize';

export interface ContactListAttributes {
  uuid?: string;
  contactUuid: string;
  listUuid: string;
}

export interface ContactListAttributesCreationAttribute
  extends Optional<ContactListAttributes, 'uuid'> {}
