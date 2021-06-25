import { ResultSetHeader } from 'mysql2';
import { v4 as uuidv4 } from 'uuid';
import { addedContact201, internalServerError500, updatedContact200 } from '../constants.js';
import { WorkWithDB } from '../interfaces.js';
import { microSequelize } from '../servers.js';
import { showResult, updateStringHelper } from './contact.utils.js';

export const creatNewContact: WorkWithDB = async (req) => {
  const { name, email } = JSON.parse(req.body.contact);
  const query = `INSERT INTO contacts (uuid, name, email, createdAt, updatedAt) VALUES('${uuidv4()}', '${name}', '${email}', now(), now());`;
  console.log(query);
  try {
    const res = (await microSequelize.query(query)) as ResultSetHeader[];
    showResult(res);
    return addedContact201;
  } catch (err) {
    return internalServerError500;
  }
};

export const updateExistedContact: WorkWithDB = async (req) => {
  const query = updateStringHelper(req);
  console.log(query);
  try {
    const res = (await microSequelize.query(query)) as ResultSetHeader[];
    showResult(res);
    return updatedContact200;
  } catch (err) {
    return internalServerError500;
  }
};
