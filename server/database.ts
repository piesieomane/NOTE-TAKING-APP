import { Sequelize } from 'sequelize';

const db = new Sequelize('postgres', 'postgres', '213141P@y', {
  host: 'localhost',
  dialect: 'postgres',
});

export default db;
