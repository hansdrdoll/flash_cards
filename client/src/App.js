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
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/decks/new" component={CreateDeck} />
              <Route exact path="/play" component={GamePlay} />
              {/* <Route exact path="/" component={} /> */}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
