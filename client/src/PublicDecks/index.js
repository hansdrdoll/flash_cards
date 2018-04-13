import React, { Component } from "react";
import PublicDeck from "../PublicDeck";

class PublicDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicItem: ["title", "content", "save"]
    };
  }
  render() {
    const publicDList = this.state.publicItem.map(item => {
      <p>
        <PublicDeck component={item} />
      </p>;
    });
    return <div>{publicDList}</div>;
  }
}

export default PublicDecks;
