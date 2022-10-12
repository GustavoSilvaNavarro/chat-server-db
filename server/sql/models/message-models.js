'use strict';
const pool = require('../db/db');

exports.getMessages = async () => {
  try {
    const resp = await pool.query('SELECT "authorId", content, timestamp FROM messages');

    return resp.rows;
  } catch (err) {
    console.log(err.message);
  }
};

exports.saveMessage = async msg => {
  try {
    const { content, authorId, timestamp } = msg;

    await pool.query('INSERT INTO messages("authorId", content, timestamp) VALUES ($1, $2, $3)', [authorId, content, timestamp]);
  } catch (err) {
    console.log(err.message);
  }
};
