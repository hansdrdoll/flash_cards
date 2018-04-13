// List of dependancies
const db = require("../database/db-connection");

// Declare an object to affix the methods to
const Saved = () => {};

// Create a function that saves that saves a deck of cards
Saved.createSavedDeck = data => {
  // Insert the decks.id and users.id of the saved deck into a JOIN table of saved decks
  return db.one(
    `INSERT INTO saved_decks
     (deck_id, user_id)
     SELECT cards.question, cards.answer
     FROM cards
     JOIN user ON cards.user_id = user.id
     JOIN decks ON cards.deck_id = deck.id`
  );
};

// Create a function that returns all a users saved cards
Saved.savedDeckCards = data => {
  // Return any cards that matches the user ID passed to the database
  return db.any(
    `SELECT * FROM save_decks
  JOIN user ON cards.user_id = user.id
  JOIN decks on cards.deck_id = deck.id
   WHERE user_id = $1`,
    [data.id]
  );
};

// Created a function that deletes saved decks from the save_decks table
Saved.delete = id => {
  return db.result(
    `DELETE FROM save_decks
    JOIN decks on decks.deck_id = cards.id
    WHERE deck_id = $1`,
    [id]
  );
};

module.exports = Saved;
