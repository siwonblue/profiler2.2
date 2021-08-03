const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-profiler2.1',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};