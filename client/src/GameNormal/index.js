import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameNormal extends Component {
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
        },
        {
          id: 4,
          question: "Do you swim?",
          answer: "You do now!"
        },
        {
          id: 5,
          question: "How do we relax?",
          answer: "with JavaScript."
        }
      ]
    };
    // this.addToTailored = this.addToTailored.bind(this);
    // this.deleteFromTailored = this.deleteFromTailored.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
  }
  //
  // addToTailored(evt) {
  //   fetch(`http://localhost:4567/api/`)
  // }
  //
  // deleteFromTailored(evt) {
  //   fetch(`http://localhost:4567/api/`)
  // }

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
    // resets the value of currentCard
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

export default GameNormal;
