import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDeck = props => {
  // Destructure the data that was passed into this component from UserDecks.
  const { id, title, slug } = props.deckData;
  // Use that data to place the title of the deck.
  return (
    <Card>
      <Card.Content header={title} />
      {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
      <Card.Content extra>
        {/* <Button.Group> */}
        {/* You can use the slugs for any deck to make the path for that specific deck. */}
        {/* This takes you to the GamePlay component */}
        <Link to={`/deck/${slug}/play`}>
          <Button floated="left">Review</Button>
        </Link>
        {/* This takes you to the EditDeck component */}
        <Link to={`/deck/${slug}/edit`}>
          <Button floated="right">Edit</Button>
        </Link>
        {/* </Button.Group> */}
      </Card.Content>
    </Card>
  );
};

export default UserDeck;
