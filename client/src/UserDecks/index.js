import React, { Component } from "react";
import UserDeck from "../UserDeck";

class UserDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "vanilla JS"
        },
        {
          id: 2,
          title: "how to be chill"
        },
        {
          id: 3,
          title: "tips for getting drunk on friday after class at GA."
        }
      ]
    };
  }

  render() {
    const userDList = this.state.data.map(item => {
      return (
        <p>
          <UserDeck deckItem={item} key={item.title} />
        </p>
      );
    });
    return <div className="user-decks">{userDList}</div>;
  }
}

export default UserDecks;
