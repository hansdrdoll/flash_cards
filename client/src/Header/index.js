import React, { Component } from 'react';
import UserImg from "./ic_person_black_24px.svg";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h2 className="nav-item dashboard">Dashboard</h2>
        <h2 className="nav-item create">Create Deck</h2>
        <h2 className="nav-item your-decks">Your Decks</h2>
        <h2 className="nav-item review">Review</h2>
        <div className="header-stretch"></div>
        <h2 className="nav-item user-icon">
          <img src={UserImg} alt="user"/>
        </h2>
      </div>
    );
  }
}

export default Header;
