const db = require("../database/db-connection");

const Decks = {};

Decks.getOne = slug => {
  return db.one("SELECT * FROM decks WHERE slug = $1", [slug]);
};

Decks.getUserDecks = user_id => {
  return db.any("SELECT * FROM decks WHERE user_id = $1", [user_id]);
};

Decks.getPublicDecks = data => {
  return db.any("SELECT * FROM decks WHERE user_id <> $1 AND public = true", [
    data.user_id,
    data.public
  ]);
};

Decks.create = data => {
  return db.one(
    `INSERT INTO decks (title, slug, user_id, public)
    VALUES ($1, $2, $3, $4) RETURNING id`,
    [data.title, data.slug, data.user_id, data.public]
  );
};

Decks.update = deckData => {
  return db.none(
    "UPDATE decks SET title = $1, slug = $2, public = $3 WHERE id = $4",
    [deckData.title, deckData.slug, deckData.public, deckData.id]
  );
};

Decks.delete = id => {
  return db.result("DELETE FROM decks WHERE id = $1", [id]);
};

module.exports = Decks;
