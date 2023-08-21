CREATE DATABASE amstramgram

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) UNIQUE NOT NULL,
  email VARCHAR(155) UNIQUE NOT NULL,
  user_url VARCHAR(200) NOT NULL,
  password VARCHAR(155) NOT NULL
);

CREATE TABLE posts (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  user_image VARCHAR(200) NOT NULL,
  post_image VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  posted_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  likes INT DEFAULT 0,
  shares INT DEFAULT 0,
  user_id INT NOT NULL
);

