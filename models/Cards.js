const db = require("../database/db-connection");

const Cards = {};

Cards.findAll = deck_id => {
  return db.any("SELECT * FROM cards WHERE deck_id = $1", [deck_id]);
};

Cards.create = newCard => {
  return db.one(
    "INSERT INTO cards (question, answer, deck_id) VALUES ($1, $2, $3) RETURNING id",
    [newCard.question, newCard.answer, newCard.deck_id]
  );
};

Cards.update = card => {
  return db.none("UPDATE cards SET question = $1, answer = $2 WHERE id = $3", [
    data.question,
    data.answer,
    data.id
  ]);
};

Cards.delete = id => {
  return db.result("DELETE FROM cards WHERE id = $1", [id]);
};

module.exports = Cards;
