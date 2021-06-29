import { DBOperationResult } from './interfaces';

export const addedData201: DBOperationResult = {
  code: 201,
  content: 'Contact sucessfully added.',
};

export const OK200: DBOperationResult = {
  code: 200,
  content: 'OK.',
};

export const errorNotFound404: DBOperationResult = {
  code: 404,
  content: 'Error 404. Not found.',
};

export const internalServerError500: DBOperationResult = {
  code: 500,
  content: 'Internal Server Error.',
};
