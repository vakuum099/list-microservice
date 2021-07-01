import { addedData201, internalServerError500, OK200 } from '../constants';
import { WorkWithDB } from '../interfaces';
import { Contact } from '../contact/contact.model';
import { List } from './list.model';
import { showData } from '../utils/utils';

export const createNewList: WorkWithDB = async (req) => {
  const { name } = req.body;
  try {
    const res = await List.create({
      name,
    });
    return addedData201;
  } catch {
    return internalServerError500;
  }
};

export const getContactsOfList: WorkWithDB = async (req) => {
  const listId: string = req.params.listId;
  const list = (await List.findByPk(listId)) as List;
  try {
    const listOfContacts = await list.$get('contacts', {
      attributes: ['name', 'email'],
    });
    showData(listOfContacts);
    return OK200;
  } catch {
    return internalServerError500;
  }
};

export const addNewContactToList: WorkWithDB = async (req) => {
  const listId: string = req.params.listId;
  const list = (await List.findByPk(listId)) as List;
  const { contactId } = req.body;
  const contact = (await Contact.findByPk(contactId)) as Contact;
  try {
    await list.$add('contact', contactId);
    return addedData201;
  } catch {
    return internalServerError500;
  }
};
