import { v4 as uuidv4 } from 'uuid';
import { addedData201, internalServerError500, OK200 } from '../constants';
import { WorkWithDB } from '../interfaces';
import { sanitizeRawArray } from '../utils/utils';
import { GetContactFromDB, IContact } from './contact.interfaces';
import { Contact } from './contact.model';

export const createNewContact: WorkWithDB = async (req) => {
  const { name, email } = JSON.parse(req.body.contact) as IContact;
  try {
    const res = await Contact.create({
      uuid: uuidv4(),
      name,
      email,
    });
    return addedData201;
  } catch (err) {
    return internalServerError500;
  }
};

export const updateExistedContact: WorkWithDB = async (req) => {
  const uuid = req.params.contactId;
  const { name, email } = JSON.parse(req.body.contact) as { name: string; email: string };
  try {
    const res = await Contact.update(
      {
        name,
        email,
      },
      {
        where: {
          uuid,
        },
      }
    );
    return OK200;
  } catch (err) {
    return internalServerError500;
  }
};

export const getContactFromDB: GetContactFromDB = async (contactId) => {
  const res = await Contact.findAll({
    attributes: ['name', 'email'],
    where: { uuid: contactId },
  });
  const preparedResult = sanitizeRawArray(res) as IContact[];
  return preparedResult;
};
