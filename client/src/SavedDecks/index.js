import React, { Component } from "react";
import SavedDeck from "../SavedDeck";

class SavedDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      user_id: 1,
      savedDeck: {}
    };
    this.fetchSavedDecks = this.fetchSavedDecks.bind(this);
  }

  componentDidMount() {
    this.fetchSavedDecks();
  }

  fetchSavedDecks() {
    fetch(`http://localhost:4567/api/saved/${this.user_id}`)
      .then(response => response.json())
      .then(savedDeckApiResponse => {
        this.setState({
          apiDataLoaded: 1,
          savedDeck: savedDeckApiResponse
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
