import { AskToWorkWithDB, FileOperationResult } from '../interfaces.js';
import { creatNewContact, updateExistedContact } from './contact.service.js';

export const creatContact: AskToWorkWithDB = async (req, res) => {
  const resultOfCreatContact: FileOperationResult = await creatNewContact(req);
  res.status(resultOfCreatContact.code).send(resultOfCreatContact.content);
};

export const updateContact: AskToWorkWithDB = async (req, res) => {
  const resultOfUpdateContact: FileOperationResult = await updateExistedContact(req);
  res.status(resultOfUpdateContact.code).send(resultOfUpdateContact.content);
};