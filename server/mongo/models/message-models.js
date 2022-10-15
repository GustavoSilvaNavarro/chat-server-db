'use strict';
const client = require('./connectionDB');

const messColl = client.db('messages-db').collection('messages');

exports.getAllMessagesFromDb = async () => {
  try {
    // const msgs = await client.db('messages-db').collection('messages').find({}, { _id: 0 }).toArray();
    const msgs = await messColl.find({}, { projection: { _id: 0 }}).toArray();
    return msgs;
  } catch (err) {
    console.error(err.message);
  }
};

exports.postMessages = async (msg) => {
  try {
    // await client.db('messages-db').collection('messages').insertOne(msg);
    await messColl.insertOne(msg);
  } catch (err) {
    console.error(err.message);
  }
};
