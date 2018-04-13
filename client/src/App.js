import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import CreateDeck from './CreateDeck';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <div className="main-view">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/decks/new" component={CreateDeck} />
            {/* <Route exact path="/" component={} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
