import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameNormal from "../GameNormal";
import GameTailored from "../GameTailored";

class GamePlay extends Component {
  render() {
    return (
      <div>
        <h1>
          Review all your cards or would you like to see see a selection
          tailored to you?
        </h1>
        <Link to="/play/normal">
          <button className="game-type">normal 😊</button>
        </Link>
        <Link to="/play/tailored">
          <button className="game-type">tailored 🤯</button>
        </Link>
      </div>
    );
  }
}

export default GamePlay;
