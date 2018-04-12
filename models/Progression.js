const db = require("../database/db-connection");

const Progression = () => {};

Progression.allCards = () => {
  return db.any(`SELECT question, answer FROM cards
    JOIN user ON cards.user_id = user.id
    JOIN decks ON cards.deck_id = deck.id`);
};

Progression.deckCards = data => {
  return db.any(
    `SELECT question, answer FROM cards
    JOIN user ON cards.user_id = user.id
    JOIN decks ON cards.deck_id = deck.id
    WHERE deck.slug = $1`,
    [data.slug]
  );
};

Progression.create = () => {
  return db.one(
    `INSERT INTO progression
    (question, answer, card_id, user_id, deck_id)
    SELECT cards.question, cards.answer
    FROM cards
    JOIN user ON cards.user_id = user.id
    JOIN decks ON cards.deck_id = deck.id`
  );
};

Progression.delete = id => {
  return db.result(
    `DELETE FROM progression
    JOIN cards ON cards.card_id = cards.id
    WHERE card_id = $1`,
    [id]
  );
};

module.exports = Progression;
