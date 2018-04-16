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

const createNewDeck = (title, token) => {
  const body = { title, token }
  console.log("api",body)
  return fetch(`http://localhost:4567/api/decks/new`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => console.log(response))
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
