import { Optional } from 'sequelize';

export interface ContactAttributes {
  uuid?: string;
  name: string;
  email: string;
}

export interface ContactCreationAttribute extends Optional<ContactAttributes, 'uuid'> {}

export interface GetContactFromDB {
  (contactId: string): Promise<ContactAttributes[]>;
}
