import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateDeck from "./CreateDeck";
import GamePlay from "./GamePlay";
import GameNormal from "./GameNormal";
import GameTailored from "./GameTailored";
import EditDeck from "./EditDeck";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="all">
            <Header />
            <div className="main-view">
              {/* This first component should eventually be the auth */}
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/decks/new" component={CreateDeck} />
              <Route path="/:deckSlug/play" component={GamePlay} />
              <Route path="/:deckSlug/play/normal" component={GameNormal} />
              <Route path="/:deckSlug/play/tailored" component={GameTailored} />
              <Route path="/:deckSlug/edit" component={EditDeck} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
