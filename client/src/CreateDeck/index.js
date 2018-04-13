import React, { Component } from "react";

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  render() {
    return (
      <div className="create-deck">
        <h2>Create Deck</h2>
        <form>
          <input type="text" placeholder="Deck Title" />
          <div className="input-card">
            <input type="text" placeholder="Front" />
            <input type="text" placeholder="Back" />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateDeck;
