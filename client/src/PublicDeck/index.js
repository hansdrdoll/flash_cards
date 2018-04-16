import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { saveDeck } from "../api";
import TokenService from "../TokenService";

class PublicDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveButton: "Save"
    };
  }
  // saveDeck()

  render() {
    const { id, title, slug } = this.props.pubDeckData;
    return (
      <Card>
        <Card.Content header={title} />
        {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
        <Card.Content extra>
          <Link to={`/deck/${slug}/play`}>
            <Button floated="left">Review</Button>
          </Link>

          <Button floated="right">{this.state.saveButton}</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default PublicDeck;
