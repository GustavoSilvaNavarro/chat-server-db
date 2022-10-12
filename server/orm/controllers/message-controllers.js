'use strict';
const { getMessagesFromDb, saveMessagesIntoDb } = require('../models/daos/message-daos');
const messagesMethods = {};

messagesMethods.getAllMessages = async (ctx, next) => {
  try {
    const msgs = await getMessagesFromDb();

    ctx.status = 200;
    ctx.body = msgs;
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

messagesMethods.saveChatMessages = (ctx, next) => {
  try {
    saveMessagesIntoDb(ctx.request.body);
    ctx.status = 201;
    ctx.body = 'Success';
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

module.exports = messagesMethods;
