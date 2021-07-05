import { DBOperationResult } from './interfaces';
import * as dotenv from 'dotenv';

export const addedData201: DBOperationResult = {
  code: 201,
  content: 'Data sucessfully added.',
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

const env = dotenv.config().parsed as dotenv.DotenvParseOutput ;

export const PORT: number = Number(env['LIST_PORT']);
export const dataBaseName = env['DB_NAME'];
export const dataBaseUser = env['DB_USER'];
export const dataBasePassword = env['DB_PASSWORD'];
export const dataBaseDialect = env['DB_DIALECT'];
export const dataBaseHost = env['DB_HOST'];


