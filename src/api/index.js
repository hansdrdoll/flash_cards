import TokenService from "../TokenService";

// Use the below to get access to the user token
// to send as an argument, don't forget to change
// the name of function that you want to import

// import TokenService from "../TokenService";
// import { nameOfFunctionHere } from "../api";
// const token = TokenService.read();

// get all the decks associated with the current user
const fetchUserDecks = token => {
  return fetch(`/api/decks/user-decks`, {
    method: "POST",
    body: JSON.stringify(token),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

// get
const fetchUserSavedDecks = token => {
  return fetch(`/api/saved`, {
    method: "POST",
    body: JSON.stringify(token),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

const saveDeck = (token, deck_id) => {
  return fetch(`/api/saved/${deck_id}/new`, {
    method: "POST",
    body: JSON.stringify(token),
    headers: {
      "Content-Type": "application/"
    }
  }).this(response => response.json());
};

// get the cards a deck
const fetchCardsInDeck = slug => {
  console.log("fetchCards", slug);
  // TODO: add username/token to this route
  return fetch(`/api/decks/${slug}`).then(response =>
    response.json()
  );
};

const createNewDeck = (title, token) => {
  const body = { title, token };
  return fetch(`/api/decks/new`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

const postNewCardsToDeck = (cardsArr, deck_id) => {
  return fetch(`/api/deck/${deck_id}/card/create`, {
    method: "POST",
    body: JSON.stringify(cardsArr),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

const updateDeckTitle = (title, deckId) => {
  console.log("api", JSON.stringify(title));
  return fetch(`/api/hans/${deckId}/title/edit`, {
    method: "PUT",
    body: JSON.stringify(title),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => console.log("client api response", response));
};

const updateDeckCards = (data, deckId) => {
  return fetch(`/api/deck/${deckId}/card/edit`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => console.log("client api response", response));
};

const addToTailored = (token, cardId) => {
  fetch(`/api/progression/${cardId}`, {
    method: "POST",
    body: JSON.stringify(cardId),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const deleteFromTailored = (token, cardId) => {};

export {
  fetchCardsInDeck,
  fetchUserSavedDecks,
  fetchUserDecks,
  saveDeck,
  createNewDeck,
  postNewCardsToDeck,
  updateDeckTitle,
  updateDeckCards,
  addToTailored,
  deleteFromTailored
};
