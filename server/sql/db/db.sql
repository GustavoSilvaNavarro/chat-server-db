CREATE DATABASE IF NOT EXISTS messagescwdb;

USE messagescwdb;

CREATE TABLE messages (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  authorId BOOLEAN DEFAULT false,
  content VARCHAR(2500) DEFAULT NULL,
  timestamp VARCHAR(2500) DEFAULT NULL,
  PRIMARY KEY (id)
);

SHOW tables;
DESCRIBE messages;

SELECT * FROM messages;

DROP TABLE messages;