DROP DATABASE IF EXISTS CineCast;

CREATE DATABASE CineCast;

USE CineCast;

CREATE TABLE User (
  id_User int AUTO_INCREMENT,
  username VARCHAR(200),
  email VARCHAR(200),
  birthday VARCHAR(200),
  categorie VARCHAR(200),
  password VARCHAR(200),
  phone_number int,
  picture VARCHAR(900),
  posts VARCHAR(500),
  videos JSON,
  likes int,
  PRIMARY KEY (id_User)
);

CREATE TABLE Posts (
  id_User int,
  id_Post int AUTO_INCREMENT,
  post VARCHAR(500),
  video VARCHAR(500),
  picture VARCHAR(500),
  PRIMARY KEY (id_Post),
  FOREIGN KEY (id_User) REFERENCES User(id_User)
);

CREATE TABLE Review(
  id_Review int AUTO_INCREMENT,
  id_User int,
  comment VARCHAR(500),
  PRIMARY KEY (id_Review),
  FOREIGN KEY (id_User) REFERENCES User(id_User)
);

CREATE TABLE Message(
  id_Message int AUTO_INCREMENT,
  id_User int,
  user_message VARCHAR(500),
  message_time date,
  PRIMARY KEY (id_Message),
  FOREIGN KEY (id_User) REFERENCES User(id_User)
);

CREATE TABLE Chats(
  id_Chats int AUTO_INCREMENT,
  id_User int,
  id_Message int,
  messages JSON,
  PRIMARY KEY (id_Chats),
  FOREIGN KEY (id_User) REFERENCES User(id_User),
  FOREIGN KEY (id_Message) REFERENCES Message(id_Message)
);

Create TABLE comments(
  id int NOT NULL AUTO_INCREMENT,
  des varchar(350) NOT NULL,
  id_Post int,
  FOREIGN KEY (id_Post) REFERENCES Posts(id_Post),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/