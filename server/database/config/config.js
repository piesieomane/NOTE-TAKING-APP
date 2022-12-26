require('dotenv').config();

export const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: '127.0.0.1',
  dialect: 'postgres',
};
export const test = {
  username: 'root',
  password: null,
  database: 'database_test',
  host: '127.0.0.1',
  dialect: 'mysql',
};
export const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: 'containers-us-west-82.railway.app',
  dialect: 'postgres',
};
