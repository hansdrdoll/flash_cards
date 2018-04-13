import React from "react";

const SavedDeck = props => {
  const { savedItem } = props;
  return (
    <div>
      <div className="main-deck-content">
        <h1> Deck number {props.savedItem.id}. </h1>
      </div>
      <div className="footer">
        <p className="numberOfCards">{props.savedItem.title}</p>
        <button className="to-review">review ▶️ </button>
        <button className="to-edit">edit</button>
      </div>
    </div>
  );
};

export default SavedDeck;
