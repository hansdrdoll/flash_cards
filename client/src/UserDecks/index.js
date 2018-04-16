import React, { Component } from "react";
import UserDeck from "../UserDeck";

class UserDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
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
        this.setState({
          apiDataLoaded: true,
          deckBySlug: decksApiResponse
        });
      });
  }

  render() {
    const { deckBySlug } = this.state;
    // Get the values from the object in this.state.deckBySlug
    const decks = Object.values(deckBySlug);
    console.log(deckBySlug);
    console.log(decks);
    if (decks.length === 0) {
      return (
        <div>
          <p>Loading~</p>
        </div>
      );
    }
    // Loop through the data from the api, and pass them on to the UserDeck component.
    const userDList = deckBySlug.map(deck => {
      return (
        <div className="deck-container">
          <UserDeck deckData={deck} key={deck.id} />
        </div>
      );
    });
    return <div className="user-decks">{userDList}</div>;
  }
}

export default UserDecks;
