import { v4 as uuidv4 } from 'uuid';
import { addedData201, internalServerError500, OK200 } from '../constants';
import { getListOfContacts } from '../contact/contact.utils';
import { ContactsList } from '../contactsList/contactsList.model';
import { WorkWithDB } from '../interfaces';
import { showData } from '../utils/utils';
import { List } from './list.model';

export const createNewList: WorkWithDB = async (req) => {
  const { name } = JSON.parse(req.body.list) as { name: string };
  try {
    const res = await List.create({
      uuid: uuidv4(),
      name,
    });
    return addedData201;
  } catch (err) {
    return internalServerError500;
  }
};

export const getContactsOfList: WorkWithDB = async (req) => {
  const listId: string = req.params.listId;
  try {
    const res = await ContactsList.findAll({
      attributes: ['contactId'],
      where: { listId },
    });
    const answer = await getListOfContacts(res);
    showData(answer);
    return OK200;
  } catch (err) {
    return internalServerError500;
  }
};

export const addNewContactToList: WorkWithDB = async (req) => {
  const listId: string = req.params.listId;
  const { contactId } = JSON.parse(req.body.contactId) as { contactId: string };
  try {
    const res = await ContactsList.create({
      uuid: uuidv4(),
      listId,
      contactId,
    });
    return addedData201;
  } catch (err) {
    return internalServerError500;
  }
};
