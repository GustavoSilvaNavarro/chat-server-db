'use strict';
const { getMessages, saveMessage } = require('../models/message-models');

const messageMethods = {};

//! Get - Provide client with all messages
messageMethods.getAllMessages = async (ctx, next) => {
  try {
    const msgs = await getMessages();
    ctx.response.status = 200;
    ctx.body = msgs;
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

//! POST - Save messages
messageMethods.saveMessages = async (ctx, next) => {
  try {
    await saveMessage(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = 'Success';
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

module.exports = messageMethods;
