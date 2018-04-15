import React, { Component } from "react";
import UserDeck from "../UserDeck";

class UserDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      deckBySlug: {}
    };
    this.fetchUserDecks = this.fetchUserDecks.bind(this);
  }

  componentDidMount() {
    this.fetchUserDecks();
  }

  // Fetch all the decks from the api that's associated with the User's ID
  fetchUserDecks() {
    fetch(`http://localhost:4567/api/decks/`)
      .then(response => response.json())
      .then(decksApiResponse => {
        console.log(decksApiResponse);
        let deckBySlug = {};
        decksApiResponse.forEach(data => {
          console.log(data);
          deckBySlug[data] = data;
        });
        this.setState((previousState, props) => {
          deckBySlug = Object.assign(previousState.deckBySlug, deckBySlug);
          return {
            deckBySlug: deckBySlug
          };
        });
      });
  }

  render() {
    const { deckBySlug } = this.state;
    const decks = Object.values(deckBySlug);
    if (decks.length === 0) {
      return (
        <div>
          <p>Loading~</p>
        </div>
      );
    }
    const userDList = decks.map(item => {
      return (
        <div className="deck-container">
          <UserDeck key={decks.id} title={decks.title} slug={decks.slug} />
        </div>
      );
    });
    return <div className="user-decks">{userDList}</div>;
  }
}

export default UserDecks;
