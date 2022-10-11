'use strict';
const pool = require('../db/db');

exports.getMessages = async () => {
  try {
    const [rows] = await pool.query('SELECT authorId, content, timestamp FROM messages');

    return rows;
  } catch (err) {
    console.log(err.message);
  }
};

exports.saveMessage = async msg => {
  try {
    const { content, authorId, timestamp } = msg;

    await pool.query('INSERT INTO messages(authorId, content, timestamp) VALUES (?, ?, ?)', [authorId, content, timestamp]);
  } catch (err) {
    console.log(err.message);
  }
};
