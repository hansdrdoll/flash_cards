import React, { Component } from "react";
import "./reset.css"
import "./App.css";
import Header from './Header';
import UserDecks from "./UserDecks";
import SavedDecks from "./SavedDecks";
import PublicDecks from "./PublicDecks";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-view">
          {/* Route: dashboard */}
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
          {/* End of dashboard route */}
        </div>
      </div>
    );
  }
}

export default App;
