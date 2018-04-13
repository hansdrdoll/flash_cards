import React from "react";

const UserDeck = props => {
  return (
    <div>
      <div className="main-deck-content">
        <h1> This is the decks Title. </h1>
      </div>
      <div className="footer">
        <p className="numberOfCards">12</p>
        <button className="to-review">review ▶️ </button>
        <button className="to-edit">edit</button>
      </div>
    </div>
  );
};

export default UserDeck;
