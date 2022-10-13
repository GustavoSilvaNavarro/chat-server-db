'use strict';
const { getAllMessagesFromDb, postMessages } = require('../models/message-models');
const messageMethods = {};

messageMethods.getAllMessages = async (ctx, next) => {
  try {
    const allMsgs = await getAllMessagesFromDb();
    ctx.status = 200;
    ctx.body = allMsgs;
  } catch (err) {
    console.error(err.message || err.toString());
    next(err);
  }
};

messageMethods.saveMessages = (ctx, next) => {
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
