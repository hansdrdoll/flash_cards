import React, { Component } from "react";
import SavedDeck from "../SavedDeck";
import { fetchUserSavedDecks } from "../api";
import TokenService from "../TokenService";

class SavedDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      savedDeck: {}
    };
  }

  componentDidMount() {
    fetchUserSavedDecks().then(savedDecksApiResponse => {
      this.setState({
        apiDataLoaded: true,
        savedDeck: savedDecksApiResponse
      });
    });
  }

  render() {
    const { savedDeck } = this.state;
    const sDecks = Object.values(savedDeck);
    if (sDecks.length === 0) {
      return (
        <div>
          <p>You have no saved decks!</p>
        </div>
      );
    }
    const savedDecksList = savedDeck.map(sDeck => {
      return (
        <div className="deck-container">
          <SavedDeck savedDeckData={sDeck} key={sDeck.id} />
        </div>
      );
    });
    return <div className="saved-decks">{savedDecksList}</div>;
  }
}

export default SavedDecks;
