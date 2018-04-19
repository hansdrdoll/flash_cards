import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../TokenService";
import { fetchCardsInDeck, fetchUserDecks } from "../api";
import GameNormal from "../GameNormal";
import GameTailored from "../GameTailored";

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentCard: 0,
      // cards: cardData,
      // hidden: true,
      // slug: this.props
    };
    // this.fetchCards = this.fetchCards.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.resetCards = this.resetCards.bind(this);
  }
  componentDidMount() {
    const { slug } = this.props.match.params;
    fetchCardsInDeck(this.props.match.params.slug).then(data => {
      cardData: data;
    });
  }

  nextCard(evt) {
    // increases the value of currentCard by One
    this.setState((previousState, props) => {
      // No more cards? let's not increase the value of currentCard anymore.
      if (this.state.currentCard <= this.state.cards.length - 1) {
        return { currentCard: previousState.currentCard + 1 };
      }
    });
  }

  resetCards(evt) {
    // resets the value of currentCard
    this.setState((previousState, props) => {
      return {
        currentCard: previousState.currentCard - previousState.cards.length
      };
    });
  }

  render() {
    const { deck } = this.state;
    return (
      <div>
        <h1>
          Review all your cards or would you like to see see a selection
          tailored to you?
        </h1>
        {/* This will allow us to play all the cards in the deck */}
        <Link to="./play/normal">
          <button className="game-type">
            normal{" "}
            <span role="img" aria-label="smile-blush">
              😊
            </span>
          </button>
        </Link>
        {/* This takes us to show only cards from the progression deck */}
        <Link to="./play/tailored">
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
