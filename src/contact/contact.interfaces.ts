import { ContactsList } from '../contactsList/contactsList.model';

export interface IContact {
  uuid: string;
  name: string;
  email: string;
}

export interface GetListOfContacts {
  (rawArray: ContactsList[]): Promise<IContact[]>;
}

export interface GetContactFromDB {
  (contactId: string): Promise<IContact[]>;
}
