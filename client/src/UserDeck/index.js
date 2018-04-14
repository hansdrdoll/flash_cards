import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDeck = props => {
  const { deckItem } = props;
  return (
    <Card>
<<<<<<< HEAD
    <Card.Content header={deckItem.title} />
    {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
    <Card.Content extra>
      {/* <Button.Group> */}
        <Button floated='left'>Review</Button>
        <Button floated='right'>Edit</Button>
      {/* </Button.Group> */}
    </Card.Content>
  </Card>
=======
      <Card.Content header={deckItem.title} />
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
>>>>>>> 1f148c5b36a95d54fc3687151ae235ed9de39ba3
  );
};

export default UserDeck;
