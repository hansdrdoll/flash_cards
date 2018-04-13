const db = require("../database/db-connection/flash_cards");

const Saved = () => {};

Saved.createSavedDeck = data => {
  return db.one(
    `INSERT INTO saved_decks
     (deck_id, user_id)
     SELECT cards.question, cards.answer
     FROM cards
     JOIN user ON cards.user_id = user.id
     JOIN decks ON cards.deck_id = deck.id`
  );
};
