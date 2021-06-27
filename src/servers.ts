import * as Sequelize from 'sequelize';

export const sequelize = new Sequelize.Sequelize('listsdb', 'root', 'M8NageUdWMEZHXn', {
  dialect: 'mysql',
  host: 'localhost',
});
