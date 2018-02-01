DROP DATABASE IF EXISTS nextbus;

CREATE DATABASE nextbus;

USE nextbus;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  user varchar (100) NOT NULL,

  PRIMARY KEY (id),
  UNIQUE KEY (user)
);

CREATE TABLE queryrecords (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  busselection varchar (100) NOT NULL,
  busstop varchar (100) NOT NULL,
  direction varchar (100) NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/database/nxtbus_schema.sql -p
 *  to create the database and the tables.*/
