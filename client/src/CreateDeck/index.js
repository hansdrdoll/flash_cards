import React, { Component } from "react";
import InputItem from "./input-item"

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInputs: [
        { front: '', back: '', },
        { front: '', back: '', },
        { front: '', back: '', },
        { front: '', back: '', },
        { front: '', back: '', },
      ],
    };
    this.renderCards = this.renderCards.bind(this);
    this.addEmptyCard = this.addEmptyCard.bind(this);
  }

  componentDidMount() {
    // const emptyObject = { id: null, front: '', back: '', }

  }

  renderCards () {
    const cards = [];
    for (let i = 1; i <= this.state.cardInputs.length; i++) {
      cards.push(<InputItem key={i} number={i} />);
    }
    return cards;
  }

  addEmptyCard (evt) {
    evt.preventDefault();
    // if a new blank card is needed,
    // push a new object to the this.state.cardInputs array
    const emptyObject = { id: null, front: '', back: '', }
      this.setState({
        cardInputs: [...this.state.cardInputs, emptyObject]
      })
  }

  handleInput(evt, index) {

  }

  render() {
    return (
      <div className="create-deck">
        <h2>Create Deck</h2>
        <form>
          <input type="text" placeholder="Deck Title" />
            {this.renderCards()}
            <button onClick={this.addEmptyCard}>Add Card</button>
        </form>
      </div>
    )
  }
}

export default CreateDeck;
