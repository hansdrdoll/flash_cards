import React, { Component } from "react";
import { Header, Segment, Divider } from "semantic-ui-react";
import UserDecks from "../UserDecks";
import PublicDecks from "../PublicDecks";
import SavedDecks from "../SavedDecks";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="deck-section">
          <Header as="h2" attached="top">
            Your Decks
          </Header>
          <Segment attached>
            <UserDecks />
          </Segment>
        </div>
        {/* <Divider section /> */}
        {/* if no saved decks, hide this section */}
        <div className="deck-section">
          <Header as="h2" attached="top">
            Saved Decks
          </Header>
          <Segment attached>
            <SavedDecks />
          </Segment>
        </div>
        {/* <Divider section /> */}
        {/* end of saved decks ternary */}

        <div className="deck-section">
          <Header as="h2" attached="top">
            Public Decks
          </Header>
          <Segment attached>
            <PublicDecks />
          </Segment>
        </div>
      </div>
    );
  }
}

export default Dashboard;
