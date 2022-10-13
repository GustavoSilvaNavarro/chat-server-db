const mongoose = require('mongoose');

const env = require('../utils/env');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(env.localDbURI);
    console.log(`DB is connected to ${db.connection.db.databaseName}`);
  } catch (err) {
    console.error('Unable to connect to DB', err);
    process.exit(1);
  }
};

module.exports = { connectDB };
