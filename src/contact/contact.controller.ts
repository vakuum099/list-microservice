import { AskToWorkWithDB, DBOperationResult } from '../interfaces';
import { createNewContact, updateExistedContact } from './contact.service';

export const createContact: AskToWorkWithDB = async (req, res) => {
  const resultOfCreatContact: DBOperationResult = await createNewContact(req);
  res.status(resultOfCreatContact.code).send(resultOfCreatContact.content);
};

export const updateContact: AskToWorkWithDB = async (req, res) => {
  const resultOfUpdateContact: DBOperationResult = await updateExistedContact(req);
  res.status(resultOfUpdateContact.code).send(resultOfUpdateContact.content);
};
