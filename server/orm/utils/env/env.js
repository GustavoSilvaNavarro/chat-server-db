'use strict';
module.exports = {
  dbHost: process.env.DATABASE_MYSQL_HOST,
  dbUserName: process.env.DATABASE_MYSQL_USERNAME,
  dbPassword: process.env.DATABASE_MYSQL_PASSWORD,
  dbPort: Number(process.env.DATABASE_MYSQL_PORT),
  dbName: process.env.DATABASE_MYSQL_NAME,
  dbDialect: process.env.DATABASE_MYSQL_DIALECT
};
