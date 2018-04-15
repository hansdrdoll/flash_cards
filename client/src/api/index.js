import TokenService from "../TokenService";


const fetchCardsInDeck = (slug) => {
  return fetch(`http://localhost:4567/api/decks/${slug}`)
  .then(response => response.json())
  .then(data => console.log(data))
}

export {
  fetchCardsInDeck,
};
