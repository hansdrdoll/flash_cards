import React from "react";
import { Card, Button } from 'semantic-ui-react';

const UserDeck = props => {
  const { deckItem } = props;
  return (
    <Card>
    <Card.Content header={deckItem.title} />
    {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
    <Card.Content extra>
      {/* <Button.Group> */}
        <Button floated='left'>Review</Button>
        <Button floated='right'>Edit</Button>
      {/* </Button.Group> */}
    </Card.Content>
  </Card>
  );
};

export default UserDeck;
