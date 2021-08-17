const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  },
};
