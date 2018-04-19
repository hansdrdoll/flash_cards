import React, { Component } from "react";
import PublicDeck from "../PublicDeck";

class PublicDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      publicDeckData: []
    };
    this.fetchPublicDecks = this.fetchPublicDecks.bind(this);
  }

  componentDidMount() {
    this.fetchPublicDecks();
  }

  fetchPublicDecks() {
    fetch(`/api/decks`)
      .then(response => response.json())
      .then(publicDecksApiResponse => {
        console.log(publicDecksApiResponse);
        this.setState({
          apiDataLoaded: true,
          publicDeckData: publicDecksApiResponse
        });
      });
  }

  render() {
    const { publicDeckData } = this.state;
    console.log(publicDeckData);
    if (publicDeckData.length === 0) {
      return (
        <div>
          <p>Loading~</p>
        </div>
      );
    }
    const publicDeckList = publicDeckData.map(pDeck => {
      return (
        <p>
          {/* passing the data from public decks into the PublicDeck child as I map through each index of the array of objects. */}
          <PublicDeck pubDeckData={pDeck} key={pDeck.id} />
        </p>
      );
    });
    return <div className="public-decks">{publicDeckList}</div>;
  }
}

export default PublicDecks;
