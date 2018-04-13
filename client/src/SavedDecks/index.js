import React, { Component } from "react";
import PublicDeck from "../PublicDeck";

class SavedDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedItem: ["title", "content", "saved"]
    };
  }

  render() {
    const savedDList = this.state.savedItem.map(item => {
      <p>
        <PublicDeck component={item} />
        <br />
        okay
      </p>;
    });
    return <div>{savedDList}</div>;
  }
}

export default SavedDecks;
