import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDeck = props => {
  const { id, title, slug } = this.props;
  return (
    <Card>
      <Card.Content header={title} />
      {/* <Card.Content description={"deck number " + props.deckItem.id} /> */}
      <Card.Content extra>
        {/* <Button.Group> */}
        <Link to={`${slug}/edit`}>
          <Button floated="left">Review</Button>
        </Link>

        <Link to={`${slug}/edit`}>
          <Button floated="right">Edit</Button>
        </Link>
        {/* </Button.Group> */}
      </Card.Content>
    </Card>
  );
};

export default UserDeck;
