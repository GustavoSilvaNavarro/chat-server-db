'use strict';
const messageMethods = {};

messageMethods.getAllMessages = (ctx, next) => {
  try {
    ctx.status = 200;
    ctx.body = [];
  } catch (err) {
    console.error(err.message || err.toString());
    next(err);
  }
};

messageMethods.saveMessage = (ctx, next) => {
  try {
    console.log(ctx.request.body);
    ctx.status = 201;
    ctx.body = 'Success';
  } catch (err) {
    console.error(err.message || err.toString());
    next(err);
  }
};

module.exports = messageMethods;
