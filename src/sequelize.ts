import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { dataBaseDialect, dataBaseHost, dataBaseName, dataBasePassword, dataBaseUser } from './constants';

const dialect = dataBaseDialect as Dialect;

export const sequelize = new Sequelize(dataBaseName, dataBaseUser, dataBasePassword, {
  dialect: dialect,
  host: dataBaseHost,
});
