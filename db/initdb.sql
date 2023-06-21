CREATE database nodedb IF NOT EXISTS;
USE nodedb;
CREATE TABLE IF NOT EXISTS 'users' (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`));