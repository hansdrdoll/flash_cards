// List of dependancies
const db = require("../database/db-connection");

// Declare an object to affix the methods to
const Saved = () => {};

// Create a function that saves that saves a deck of cards
Saved.create = (username, deckId) => {
  console.log("saved model", username, deckId)
  return db.one(`SELECT id FROM users WHERE username = $1`, username)
    .then(user_id => {
  // Insert the decks.id and users.id of the saved deck into a JOIN table of saved decks
  return db.none(
    `INSERT INTO saved_decks
     (deck_id, user_id)
     VALUES ($1, $2)`, [deckId, user_id]
  );
};

// Create a function that returns all a users saved decks
Saved.savedDecks = user_id => {
  // Return any cards that matches the deck ID passed to the database
  return db.any(
    `SELECT * FROM saved_decks
     JOIN user ON decks.user_id = users.id
     JOIN decks on users.deck_id = decks.id
     WHERE user_id = $1`,
    [user_id]
  );
};

// since it's a join table, we can just select by username
// and don't have to convert username to ID
Saved.savedDecksByToken = username => {
  return db.any(
    `SELECT * FROM saved_decks
     JOIN users ON users.id = saved_decks.user_id
     JOIN decks ON saved_decks.deck_id = decks.id
     WHERE users.username = $1`,
    [username]
  );
};

// Created a function that deletes saved decks from the save_decks table
Saved.delete = id => {
  return db.result(
    `DELETE FROM saved_decks
     JOIN decks on decks.deck_id = cards.id
     WHERE deck_id = $1`,
    [id]
  );
};

module.exports = Saved;
