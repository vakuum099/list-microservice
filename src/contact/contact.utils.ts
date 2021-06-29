import { IContactsList } from '../contactsList/contactsList.interface';
import { sanitizeRawArray } from '../utils/utils';
import { GetListOfContacts, IContact } from './contact.interfaces';
import { getContactFromDB } from './contact.service';

export const getListOfContacts: GetListOfContacts = async (rawArray) => {
  const idArray = sanitizeRawArray(rawArray) as IContactsList[];
  let contacts: IContact[] = [];
  for (let i = 0; i < idArray.length; i++) {
    const contactString = await getContactFromDB(idArray[i].contactId);
    const preparedString = sanitizeRawArray(contactString)[0] as IContact;
    contacts.push(preparedString);
  }
  return contacts;
};
