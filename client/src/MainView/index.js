import React, { Component } from 'react';
import UserDecks from "../UserDecks";
import SavedDecks from "../SavedDecks";
import PublicDecks from "../PublicDecks";

class MainView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
    )
  }

}

export default MainView;
