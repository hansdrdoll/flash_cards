import React, { Component } from "react";
import PublicDeck from "../PublicDeck";

class PublicDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicData: [
        {
          id: 4,
          title: "Callback Functions!"
        },
        {
          id: 5,
          title: "Making routes in express!"
        },
        {
          id: 6,
          title: "Components in React!"
        },
        {
          id: 7,
          title: "The Dawn of DOM Manipulation"
        },
        {
          id: 8,
          title: "Flexbox Flashbacks!"
        }
      ]
    };
  }
  render() {
    const publicDList = this.state.publicData.map(item => {
      return (
        <p>
          <PublicDeck publicItem={item} key={item.id} />
        </p>
      );
    });
    return <div>{publicDList}</div>;
  }
}

export default PublicDecks;
