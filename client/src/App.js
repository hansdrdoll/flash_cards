import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Header from "./Header";
import UserDecks from "./UserDecks";
import SavedDecks from "./SavedDecks";
import PublicDecks from "./PublicDecks";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-view">
          <div className="deck-section">
            <UserDecks />
          </div>
          <div className="deck-section">
            <SavedDecks />
          </div>
          <div className="deck-section">
            <PublicDecks />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
