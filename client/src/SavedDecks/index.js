import React, { Component } from "react";
import SavedDeck from "../SavedDeck";

class SavedDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: [
        {
          id: 5,
          title: "Making routes in express!"
        },
        {
          id: 7,
          title: "The Dawn of DOM Manipulation"
        }
      ]
    };
  }

  render() {
    const savedDList = this.state.savedData.map(item => {
      return (
        <p>
          <SavedDeck savedItem={item} key={item.id} />
        </p>
      );
    });
    return <div>{savedDList}</div>;
  }
}

export default SavedDecks;
