'use strict';
const sql = require('mysql2/promise');

const env = require('../utils/env/env');

const pool = sql.createPool({
  host: env.dbHost, // 'localhost
  user: env.dbUserName, // root
  password: env.dbPassword, // your password
  port: env.dbPort, //port
  database: env.dbName // db name
});

module.exports = pool;
