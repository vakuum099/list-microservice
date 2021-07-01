import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize('listsdb', 'root', 'M8NageUdWMEZHXn', {
  dialect: 'mysql',
  host: 'localhost',
});
