DROP DATABASE flash_cards;
CREATE DATABASE flash_cards;

\c flash_cards;

CREATE TABLE users(
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE decks(
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  user_id INTEGER REFERENCES users(id),
  public BOOLEAN DEFAULT false
);

CREATE TABLE cards(
  id BIGSERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  deck_id INTEGER REFERENCES decks(id)
);

CREATE TABLE progression(
  card_id INTEGER REFERENCES cards(id),
  user_id INTEGER REFERENCES users(id),
  deck_id INTEGER REFERENCES decks(id)
);

CREATE TABLE saved_decks(
  deck_id INTEGER REFERENCES decks(id),
  user_id INTEGER REFERENCES users(id)
)
