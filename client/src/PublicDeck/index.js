import React from "react";

const PublicDeck = props => {
  const { publicItem } = props;
  return (
    <div>
      <div className="main-deck-content">
        <h1> {props.publicItem.title} </h1>
      </div>
      <div className="footer">
        <p className="numberOfCards">Deck No. {props.publicItem.id}</p>
        <button className="to-review">review ▶️ </button>
        <button className="to-save">save</button>
      </div>
    </div>
  );
};

export default PublicDeck;
