import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Input, Button, Form } from "semantic-ui-react";
import InputItem from "./input-item";
import TokenService from "../TokenService";
import { fetchCardsInDeck, fetchUserDecks, updateDeckCards } from "../api";
import "../CreateDeck/style.css";

class EditDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      cardData: []
    };
    this.addEmptyCard = this.addEmptyCard.bind(this);
    this.handleFrontInput = this.handleFrontInput.bind(this);
    this.handleBackInput = this.handleBackInput.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // const token = { token: TokenService.read() };
    // fetchUserDecks(token)
    //   .then(data => console.log(data));
    fetchCardsInDeck(this.props.match.params.slug)
    .then(data => {
      this.setState({
        cardData: data,
        newTitle: data[0].deck_title,
      })
    })
  }

  addEmptyCard() {
    const emptyObject = { front: "", back: "" };
    this.setState({
      cardInputs: [...this.state.cardInputs, emptyObject]
    });
  }

  handleFrontInput(index, cardId, evt) {
    const value = evt.target.value;
    const tempState = this.state.cardData;
    tempState[index].question = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleBackInput(index, cardId, evt) {
    const value = evt.target.value;
    const tempState = this.state.cardData;
    tempState[index].answer = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleTitleChange(evt) {
    this.setState({
      newTitle: evt.target.value
    });
  }

// TODO: make this work
  handleSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted");
    const deckId = Number(this.state.cardData[0].deck_id);
    updateDeckCards(this.state.cardData, deckId);
  }

  render() {
    return (
      <div className="create-deck">
        <h2>Edit Deck</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Deck Title"
            value={this.state.newTitle}
            onChange={this.handleTitleChange}
          />
          {this.state.cardData && this.state.cardData.map((card, i) => {
            return (<InputItem
                key={card.card_id}
                arrIndex={i}
                cardId={card.card_id}
                frontValue={card.question}
                backValue={card.answer}
                handleFrontInput={this.handleFrontInput}
                handleBackInput={this.handleBackInput}
              /> )
          })}
          <Button type="button" onClick={this.addEmptyCard}>
            Add Card
          </Button>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default EditDeck;
