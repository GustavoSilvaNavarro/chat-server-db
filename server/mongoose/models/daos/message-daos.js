'use strict';

const MessageSchema = require('../message-models');

exports.retrieveAllMessages = async () => {
  const allMsgs = await MessageSchema.find({}).select({ _id: 0, __v: 0 });
  return allMsgs;
};

exports.storeMessage = async (msg) => {
  const newMessage = new MessageSchema(msg);
  await newMessage.save();
};
