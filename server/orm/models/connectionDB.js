'use strict';
const { Sequelize } = require('sequelize');

// const env = require('../utils/env/env');

//* Connection DB for postgres, mysql and mariadb
// const sequelize = new Sequelize(env.dbName, env.dbUserName, env.dbPassword, {
//   host: env.dbHost,
//   dialect: env.dbDialect,
//   port: env.dbPort,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

//* Connection for sqlite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './server/orm/db/messages_db.sqlite'
});

module.exports = sequelize;
