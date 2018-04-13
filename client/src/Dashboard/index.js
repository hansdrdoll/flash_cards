import React, { Component } from 'react';
import UserDecks from '../UserDecks';
import PublicDecks from '../PublicDecks';
import SavedDecks from '../SavedDecks';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="deck-section">
          <h2>Your Decks</h2>
          <UserDecks />
        </div>

        {/* if no saved decks, hide this section */}
        <div className="deck-section">
          <h2>Saved Decks</h2>
          <SavedDecks />
        </div>
        {/* end of saved decks ternary */}

        <div className="deck-section">
          <h2>Public Decks</h2>
          <PublicDecks />
        </div>
      </div>
    );
  }
}

export default Dashboard;
