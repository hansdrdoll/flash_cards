import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameNormal from "../GameNormal";
import GameTailored from "../GameTailored";

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      cards: [
        {
          id: 1,
          question:
            "What function can be used to do something after a specific amount of time?",
          answer: "setTimeOut()"
        },
        {
          id: 2,
          question: "How do you grab an HTML element using Vanilla JavaScript?",
          answer:
            "You can use: 1) document.body.getElementsByTagName(className) 2) document.querySelectorAll(className)"
        },
        {
          id: 3,
          question:
            "How do you put an element into an HTML tag using JavaScript?",
          answer: "htmlTagName.appendChild('elementName')"
        }
      ]
    };
    // this.addToTailored = this.addToTailored.bind(this);
    // this.deleteFromTailored = this.deleteFromTailored.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.resetCards = this.resetCards.bind(this);
  }
  //
  // addToTailored(evt) {
  //   fetch(`http://localhost:4567/api/`)
  // }
  //
  // deleteFromTailored(evt) {
  //   fetch(`http://localhost:4567/api/`)
  // }
  //
  nextCard(evt) {
    // increases the value of currentCard by One
    this.setState((previousState, props) => {
      // No more cards? let's not increase the value of currentCard anymore.
      if (this.state.currentCard < this.state.cards.length - 1) {
        return { currentCard: previousState.currentCard + 1 };
      }
    });
  }
  resetCards(evt) {
    // resets the value of currentCard
    this.setState((previousState, props) => {
      return {
        currentCard:
          previousState.currentCard - (previousState.cards.length - 1)
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.currentCard < this.state.cards.length - 1 ? (
          <div>
            <div className="display-card">
              <h1>{this.state.cards[this.state.currentCard].question} </h1>
              <p>{this.state.cards[this.state.currentCard].answer}</p>
            </div>
            <footer className="good-or-nah">
              <button onClick={this.nextCard} className="good">
                😁
              </button>
              <button onClick={this.nextCard} className="nah">
                😰
              </button>
            </footer>
          </div>
        ) : (
          <div>
            <h1>Would you like to start over?</h1>
            <Link to="/play">
              <button className="end-of-game" onClick={this.resetCards}>
                🙏 YES, PLEASE! 🙏
              </button>
            </Link>
            <Link to="/">
              <button className="end-of-game">
                🤙 No thanks! I'm okay. 👍
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default GamePlay;
