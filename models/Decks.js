const db = require("../database/db-connection");

const Decks = {};

Decks.getAll = () => {
  return db.any("SELECT * FROM Decks");
};

Decks.getOne = slug => {
  return db.one("SELECT * FROM decks WHERE slug = $1", [slug]);
};

Decks.getUserDecks = username => {
  // uses a join table to get all decks that match a username
  return db.any(
    `
    SELECT decks.id, decks.title, decks.slug, decks.public FROM decks JOIN users ON decks.user_id = users.id WHERE users.username = $1`,
    [username]
  );
};

Decks.getPublicDecks = data => {
  return db.any("SELECT * FROM decks WHERE user_id <> $1 AND public = true", [
    data.user_id,
    data.public
  ]);
};

Decks.create = (title, slug, username) => {
  // turn the username into the user_id
  return db.one(`SELECT id FROM users WHERE username = $1`, username)
    .then(user_id => {
      // then create the new deck info with the user id
      return db.one(
        `INSERT INTO decks (title, slug, user_id)
        VALUES ($1, $2, $3) RETURNING id`,
        [title, slug, user_id.id]
      );
    });
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
