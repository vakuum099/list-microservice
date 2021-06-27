import { FileOperationResult } from './interfaces';

export const addedContact201: FileOperationResult = {
  code: 201,
  content: 'Contact sucessfully added.',
};

export const updatedContact200: FileOperationResult = {
  code: 200,
  content: 'Contact sucessfully updated.',
};

export const errorNotFound404: FileOperationResult = {
  code: 404,
  content: 'Error 404. Not found.',
};

export const internalServerError500: FileOperationResult = {
  code: 500,
  content: 'Internal Server Error.',
};
