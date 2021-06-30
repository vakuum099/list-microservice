import { ResultSetHeader } from 'mysql2';
import { v4 as uuidv4 } from 'uuid';
import { addedContact201, internalServerError500, updatedContact200 } from '../constants';
import { WorkWithDB } from '../interfaces';
import { sequelize } from '../servers';
import { showResult, updateStringHelper } from './contact.utils';

export const creatNewContact: WorkWithDB = async (req) => {
  const { name, email } = JSON.parse(req.body.contact);
  const query = `INSERT INTO contacts (uuid, name, email, createdAt, updatedAt) VALUES('${uuidv4()}', '${name}', '${email}', now(), now());`;
  try {
    const res = (await sequelize.query(query)) as ResultSetHeader[];
    showResult(res);
    return addedContact201;
  } catch (err) {
    return internalServerError500;
  }
};

export const updateExistedContact: WorkWithDB = async (req) => {
  const query = updateStringHelper(req);
  try {
    const res = (await sequelize.query(query)) as ResultSetHeader[];
    showResult(res);
    return updatedContact200;
  } catch (err) {
    return internalServerError500;
  }
};
