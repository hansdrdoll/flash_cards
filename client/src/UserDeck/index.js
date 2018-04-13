import React from "react";

const UserDeck = props => {
  const { deckItem } = props;
  return (
    <div>
      <div className="main-deck-content">
        <h1> Deck number {props.deckItem.id}. </h1>
      </div>
      <div className="footer">
        <p className="numberOfCards">{props.deckItem.title}</p>
        <button className="to-review">review ▶️ </button>
        <button className="to-edit">edit</button>
      </div>
    </div>
  );
};

export default UserDeck;
