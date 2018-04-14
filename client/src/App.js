import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateDeck from "./CreateDeck";
import GamePlay from "./GamePlay";

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
              <Route exact path="/play" component={GamePlay} />
              <Route exact path="/decks/new" component={CreateDeck} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
