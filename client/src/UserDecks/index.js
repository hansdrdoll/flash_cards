import React, { Component } from "react";
import UserDeck from "../UserDeck";
import { fetchUserDecks } from "../api";
import TokenService from "../TokenService";

const token = TokenService.read();

class UserDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      userDeckData: []
    };
  }

  componentDidMount() {
    fetchUserDecks().then(userDeckApiResponse => {
      console.log(userDeckApiResponse);
      this.setState({
        apiDataLoaded: true,
        userDeckData: userDeckApiResponse
      });
    });
  }

  // Fetch all the decks from the api that's associated with the User's ID
  render() {
    const { userDeckData } = this.state;
    // Get the values from the object in this.state.deckBySlug
    const decks = Object.values(userDeckData);
    if (decks.length === 0) {
      return (
        <div>
          <p>Loading~</p>
        </div>
      );
    }
    // Loop through the data from the api, and pass them on to the UserDeck component.
    const userDList = userDeckData.map(deck => {
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
