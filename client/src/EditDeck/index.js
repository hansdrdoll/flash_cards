import React, { Component } from "react";
import InputItem from "./input-item";
import "./style.css";

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      cardInputs: [
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" }
      ]
    };
    this.renderCards = this.renderCards.bind(this);
    this.addEmptyCard = this.addEmptyCard.bind(this);
    this.handleFrontInput = this.handleFrontInput.bind(this);
    this.handleBackInput = this.handleBackInput.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  fetchCards() {}

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
    const emptyObject = { front: "", back: "" };
    this.setState({
      cardInputs: [...this.state.cardInputs, emptyObject]
    });
  }

  handleFrontInput(evt) {
    const index = evt.target.attributes.index.value;
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].front = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleBackInput(evt) {
    const index = evt.target.attributes.index.value;
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].back = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleTitleChange(evt) {
    this.setState({
      newTitle: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted");
  }

  render() {
    return (
      <div className="create-deck">
        <h2>Create Deck</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Deck Title"
            value={this.state.newTitle}
            onChange={this.handleTitleChange}
          />
          {this.renderCards()}
          <button type="button" onClick={this.addEmptyCard}>
            Add Card
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateDeck;
