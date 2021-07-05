import { addedData201, internalServerError500, OK200 } from '../constants';
import { WorkWithDB } from '../interfaces';
import { ContactAttributes } from './contact.interfaces';
import { Contact } from './contact.model';

export const createNewContact: WorkWithDB = async (req) => {
  const { name, email } = req.body as ContactAttributes;
  try {
    const res = await Contact.create({
      name,
      email,
    });
    return addedData201;
  } catch {
    return internalServerError500;
  }
};

export const updateExistedContact: WorkWithDB = async (req) => {
  const uuid = req.params.contactId;
  const { name, email } = req.body as ContactAttributes;
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
  } catch {
    return internalServerError500;
  }
};
