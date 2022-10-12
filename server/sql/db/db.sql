CREATE DATABASE IF NOT EXISTS messagescwdb;

USE messagescwdb;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  authorId BOOLEAN DEFAULT false,
  content TEXT DEFAULT NULL,
  timestamp BIGINT DEFAULT 0,
  PRIMARY KEY (id)
);

SHOW tables;
DESCRIBE messages;

SELECT * FROM messages;

DROP TABLE IF EXISTS messages;