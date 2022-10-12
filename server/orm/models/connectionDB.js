'use strict';
const { Sequelize } = require('sequelize');

const env = require('../utils/env/env');

const sequelize = new Sequelize(env.dbName, env.dbUserName, env.dbPassword, {
  host: env.dbHost,
  dialect: env.dbDialect,
  port: env.dbPort,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
