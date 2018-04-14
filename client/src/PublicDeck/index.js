import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PublicDeck = props => {
  const { publicItem } = props;
  return (
    <Card>
      <Card.Content header={publicItem.title} />
      {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
      <Card.Content extra>
        <Link to="/play">
          <Button floated="left">Review</Button>
        </Link>
        <Button floated="right">Save</Button>
      </Card.Content>
    </Card>
  );
};

export default PublicDeck;
