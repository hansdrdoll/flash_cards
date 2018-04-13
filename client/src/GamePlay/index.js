import React, { Component } from "react";
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
    // this.nextCard  = this.nextCard.bind(this);
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
  // nextCard(evt) {
  //   // increases the value of currentCard by One
  // }

  render() {
    return (
      <div>
        <div className="display-card">
          <h1>{this.state.cards[this.state.currentCard].question} </h1>
          <p>{this.state.cards[this.state.currentCard].answer}</p>
        </div>
        <footer className="good-or-nah">
          <button className="good">😁</button>
          <button className="nah">😰</button>
        </footer>
      </div>
    );
  }
}

export default GamePlay;
