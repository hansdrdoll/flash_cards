import React from "react";
import { Card, Button } from 'semantic-ui-react';

const SavedDeck = props => {
  const { savedItem } = props;
  return (
    <Card>
      <Card.Content header={savedItem.title} />
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

export default SavedDeck;
