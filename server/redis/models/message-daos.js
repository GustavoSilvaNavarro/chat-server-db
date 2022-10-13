'use strict';
const redis = require('./connectDb');

exports.retrieveMessages = async () => {
  try {
    const messages = await redis.lrange('msgs', 0, -1);
    let allMess = [];

    if (messages.length) {
      messages.forEach(el => allMess.push(JSON.parse(el)));
    }

    return allMess;
  } catch (err) {
    console.error(err.message);
  }
};

exports.postMessages = (msg) => {
  try {
    redis.rpush('msgs', JSON.stringify(msg));
    redis.expire('msgs', 600);
  } catch (err) {
    console.error(err);
  }
};
