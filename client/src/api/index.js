import TokenService from "../TokenService";

// get all the decks associated with the current user
const fetchUserDecks = (token) => {
  return fetch(`http://localhost:4567/api/decks/user-decks`, {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
}

const fetchUserSavedDecks = (token) => {
  return fetch(`http://localhost:4567/api/saved`, {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
}

// get the cards a deck
const fetchCardsInDeck = (slug) => {
  // TODO: add username/token to this route
  return fetch(`http://localhost:4567/api/decks/${slug}`)
  .then(response => response.json())
}

const createNewDeck = (title, token) => {
  const body = { title, token }
  return fetch(`http://localhost:4567/api/decks/new`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
}

const postNewCardsToDeck = (cardsArr, deck_id) => {
  return fetch(`http://localhost:4567/api/deck/${deck_id}/card/create`, {
      method: "POST",
      body: JSON.stringify(cardsArr),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
}

export {
  fetchCardsInDeck,
  fetchUserDecks,
  createNewDeck,
  postNewCardsToDeck,
};
