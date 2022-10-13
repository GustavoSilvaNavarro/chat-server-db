'use strict';
const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  authorId: { type: Boolean, default: false },
  content: { type: String, required: true, trim: true },
  timestamp: { type: Number, default: 0 }
});

module.exports = model('Message', MessageSchema);
