import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SavedDeck = props => {
  const { savedItem } = props;
  return (
    <Card>
      <Card.Content header={savedItem.title} />
      {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
      <Card.Content extra>
        {/* <Button.Group> */}
        <Link to="/play">
          <Button floated="left">Review</Button>
        </Link>
        <Button floated="right">Edit</Button>
        {/* </Button.Group> */}
      </Card.Content>
    </Card>
  );
};

export default SavedDeck;
