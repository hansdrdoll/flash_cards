const db = require('../database/db-connection');

const Cards = {};

Cards.findByDeckSlug = slug => {
  return db.any(
    `SELECT cards.id AS card_id,
    cards.question,
    cards.answer,
    cards.deck_id,
    decks.id AS deck_id,
    decks.title AS deck_title
    FROM cards
    JOIN decks
    ON cards.deck_id = decks.id
    WHERE decks.slug = $1`,
    [slug]
  );
};

Cards.createMany = (arr, deck_id) => {
  // make an insert statement for each card in the deck
  arr.map(card => {
    console.log(card);
    db.none('INSERT INTO cards (question, answer, deck_id) VALUES ($1, $2, $3)',
      [card.front, card.back, deck_id])
})
  // console.log("destination",arr);
}

Cards.create = newCard => {
  return db.one(
    'INSERT INTO cards (question, answer, deck_id) VALUES ($1, $2, $3) RETURNING id',
    [newCard.question, newCard.answer, newCard.deck_id]
  );
};

Cards.update = card => {
  return db.none('UPDATE cards SET question = $1, answer = $2 WHERE id = $3', [
    data.question,
    data.answer,
    data.id,
  ]);
};

Cards.delete = id => {
  return db.result('DELETE FROM cards WHERE id = $1', [id]);
};

module.exports = Cards;
