'use strict';
const { retrieveMessages, postMessages } = require('../models/message-daos');
const messageMethods = {};

messageMethods.getAllMessages = async (ctx, next) => {
  try {
    const msgs = await retrieveMessages();
    ctx.status = 200;
    ctx.body = msgs;
  } catch (err) {
    console.error(err.message || err.toString());
    next(err);
  }
};

messageMethods.saveMessage = (ctx, next) => {
  try {
    postMessages(ctx.request.body);
    ctx.status = 201;
    ctx.body = 'Success';
  } catch (err) {
    console.error(err.message || err.toString());
    next(err);
  }
};

module.exports = messageMethods;
