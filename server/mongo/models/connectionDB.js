const { MongoClient } = require('mongodb');

const env = require('../utils/env/env');

const client = new MongoClient(env.dbUri);

(async function connectionDb () {
  try {
    await client.connect();
    console.log('DB is connected');
  } catch (err) {
    console.error(err);
  }
})();

module.exports = client;
