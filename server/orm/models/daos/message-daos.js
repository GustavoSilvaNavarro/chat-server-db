'use strict';
const MessagesSchema = require('../message-models');

exports.getMessagesFromDb = async () => {
  try {
    const messages = await MessagesSchema.findAll({
      raw: true,
      attributes: ['authorId', 'content', 'timestamp']
    });
    return messages;
  } catch (err) {
    console.log(err.message);
  }
};

exports.saveMessagesIntoDb = async (msg) => {
  try {
    const { authorId, content, timestamp } = msg;
    await MessagesSchema.create({ authorId, content, timestamp });
  } catch (err) {
    console.log(err.message);
  }
};
