import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <h2 className="nav-item dashboard">Dashboard</h2>
        <h2 className="nav-item create">Create Deck</h2>
        <h2 className="nav-item your-decks">Your Decks</h2>
        <h2 className="nav-item review">Review</h2>
      </div>
    )
  }
}

export default Header;
