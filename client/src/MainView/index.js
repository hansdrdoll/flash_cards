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
        <UserDecks />
        <SavedDecks />
        <PublicDecks />
      </div>
    )
  }

}

export default MainView;
