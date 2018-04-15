import TokenService from "../TokenService";

const fetchUserDecks = (token) => {
  return fetch(`http://localhost:4567/api/decks/user-decks`, {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
}

const fetchCardsInDeck = (slug) => {
  // TODO: add username/token to this route
  return fetch(`http://localhost:4567/api/decks/${slug}`)
  .then(response => response.json())
}

export {
  fetchCardsInDeck,
  fetchUserDecks,
};
