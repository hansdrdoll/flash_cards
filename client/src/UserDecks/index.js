import React, { Component } from "react";
import UserDeck from "../UserDeck";

class UserDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckItem: ["title", "content", "edit"]
    };
  }

  render() {
    const userDList = this.state.deckItem.map(item => {
      return (
        <p>
          <UserDeck component={item} key={item.title} />
        </p>
      );
    });
    return (
      <div>
        {/* <p>not a list</p> */}
        <div>{userDList}</div>
      </div>
    );
  }
}

export default UserDecks;
