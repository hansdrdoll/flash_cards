import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../TokenService";
import { fetchCardsInDeck } from "../api";

class GameNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      cards: [],
      isHidden: true
    };

    this.nextCard = this.nextCard.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
  }

  componentDidMount() {
    const token = {token: TokenService.read()}
    console.log("Hi im here");
    fetchCardsInDeck(this.props.match.params.slug)
    .then(cards => {
      console.log(cards)
      this.setState({
        cards: cards
      })
    })
  }
  handleClick() {
    this.setState({
      isHidden: false
    });
  }


  shuffleCards(evt) {
    const cardsArray = this.state.cards;
    cardsArray.sort((a, b) => {
      return 0.5 - Math.random();
    });

    this.setState((previousState, props) => {
      return { cards: cardsArray };
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
    // resets the value of currentCard, regardless of length
    this.setState((previousState, props) => {
      return {
        currentCard: previousState.currentCard - previousState.cards.length
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.currentCard <= this.state.cards.length - 1 ? (
          <div>
            <div className="display-card">
              <h1>{this.state.cards[this.state.currentCard].question} </h1>
            <div className="hidden">
              <p>{this.state.cards[this.state.currentCard].answer}</p>
            </div>
            <button className="revealAnswer" onClick={this.handleClick.bind(this)}>
            Reveal
            </button>
            </div>
            <footer className="good-or-nah">
              <button onClick={this.nextCard} className="good">
                <span role="img" aria-label="grin">
                  😁
                </span>
              </button>
              <button onClick={this.nextCard} className="nah">
                <span role="img" aria-label="nervous">
                  😰
                </span>
              </button>
            </footer>
          </div>
        ) : (
          <div>
            <h1>Would you like to start over?</h1>
            {/* Takes us back to the inital gameplay screen, where users
              can choose to play a normal or tailored game.*/}
            <Link to="../play">
              <button className="end-of-game" onClick={this.resetCards}>
                <span role="img" aria-label="pray">
                  🙏
                </span>{" "}
                YES, PLEASE!{" "}
                <span role="img" aria-label="pray">
                  🙏
                </span>
              </button>
            </Link>
            {/* Takes us back to the dashboard*/}
            <Link to="/">
              <button className="end-of-game">
                <span role="img" aria-label="shaka">
                  🤙
                </span>{" "}
                No thanks! I'm okay.{" "}
                <span role="img" aria-label="thumbsup">
                  👍
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default GameNormal;
