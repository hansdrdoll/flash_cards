import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameNormal from "../GameNormal";
import GameTailored from "../GameTailored";

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0
    };
  }
  componentDidMount() {}

  fetchCards() {
    fetch("/api/deck/:deck_id/cards")
      .then(response => response.json())
      .then(flashCardsAPIResponse => {
        let decksBySlug = {};
        flashCardsAPIResponse.forEach(card => {
          decksBySlug[decks.slug] = card;
        });
      });
  }
  render() {
    return (
      <div>
        <h1>
          Review all your cards or would you like to see see a selection
          tailored to you?
        </h1>
        <Link to="/play/normal">
          <button className="game-type">
            normal{" "}
            <span role="img" aria-label="smile-blush">
              😊
            </span>
          </button>
        </Link>
        <Link to="/play/tailored">
          <button className="game-type">
            tailored{" "}
            <span role="img" aria-label="boom">
              🤯
            </span>
          </button>
        </Link>
      </div>
    );
  }
}

export default GamePlay;
