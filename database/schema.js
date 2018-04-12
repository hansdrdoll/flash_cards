CREATE DATABASE flash_cards;

\c flash_cards;

DROP TABLE users;
DROP TABLE decks;
DROP TABLE cards;
DROP TABLE progression;

CREATE TABLE users(
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password_adjust VARCHAR(255),
  cards VARCHAR(255)
);

CREATE TABLE decks(
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255),
  user_id FOREIGN KEY REFERENCES users(id)
);

CREATE TABLE cards(
  id BIGSERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  deck_id FOREIGN KEY REFERENCES decks(id)
);

CREATE TABLE progression(
  card_id FOREIGN KEY REFERENCES cards(id),
  user_id FOREIGN KEY REFERENCES users(id)
);
