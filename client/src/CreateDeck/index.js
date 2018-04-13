import React, { Component } from 'react';
import InputItem from './input-item';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInputs: [
        { front: '', back: '' },
        { front: '', back: '' },
        { front: '', back: '' },
        { front: '', back: '' },
        { front: '', back: '' },
      ],
    };
    this.renderCards = this.renderCards.bind(this);
    this.addEmptyCard = this.addEmptyCard.bind(this);
    this.handleFrontInput = this.handleFrontInput.bind(this);
    this.handleBackInput = this.handleBackInput.bind(this);
  }

  // componentDidMount() {
  //
  // }

  renderCards() {
    const cards = [];
    for (let i = 0; i < this.state.cardInputs.length; i++) {
      cards.push(
        <InputItem
          key={i}
          arrIndex={i}
          handleFrontInput={this.handleFrontInput}
          handleBackInput={this.handleBackInput}
        />
      );
    }
    return cards;
  }

  addEmptyCard() {
    const emptyObject = { front: '', back: '' };
    this.setState({
      cardInputs: [...this.state.cardInputs, emptyObject],
    });
  }

  handleFrontInput(evt) {
    const index = evt.target.attributes.index.value;
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].front = value;
    this.setState({
      cardInputs: tempState,
    });
  }

  handleBackInput(evt) {
    const index = evt.target.attributes.index.value;
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].back = value;
    this.setState({
      cardInputs: tempState,
    });
  }

  render() {
    return (
      <div className="create-deck">
        <h2>Create Deck</h2>
        <form>
          <input type="text" placeholder="Deck Title" />
          {this.renderCards()}
          <button type="button" onClick={this.addEmptyCard}>
            Add Card
          </button>
        </form>
      </div>
    );
  }
}

export default CreateDeck;
