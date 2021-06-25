import { Sequelize } from 'sequelize';

export const microSequelize = new Sequelize('listsdb', 'root', 'M8NageUdWMEZHXn', {
  dialect: 'mysql',
  host: 'localhost',
});
