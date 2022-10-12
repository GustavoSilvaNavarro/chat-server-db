'use strict';
const { DataTypes } = require('sequelize');

const sequelize = require('./connectionDB');

const MessagesSchema = sequelize.define('message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  authorId: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  timestamp: {
    type: DataTypes.BIGINT,
    defaultValue: 0
  }
});

module.exports = MessagesSchema;
