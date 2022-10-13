'use strict';
const client = require('./connectionDB');

exports.getAllMessagesFromDb = async () => {
  try {
    const msgs = await client.db('messages-db').collection('messages').find({}, { _id: 0 }).toArray();
    return msgs;
  } catch (err) {
    console.error(err.message);
  }
};

exports.postMessages = async (msg) => {
  try {
    await client.db('messages-db').collection('messages').insertOne(msg);
  } catch (err) {
    console.error(err.message);
  }
};
