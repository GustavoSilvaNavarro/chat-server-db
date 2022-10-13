'use strict';

const { retrieveAllMessages, storeMessage } = require('../models/daos/message-daos');

const messagesMethods = {};

messagesMethods.getAllMessages = async (ctx, next) => {
  try {
    const msgs = await retrieveAllMessages();
    ctx.status = 200;
    ctx.body = msgs;
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

messagesMethods.postMessage = (ctx, next) => {
  try {
    storeMessage(ctx.request.body);
    ctx.status = 201;
    ctx.body = 'Success';
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

module.exports = messagesMethods;
