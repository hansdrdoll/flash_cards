import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./reset.css";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-view">
          <Router>
            <Route exact path="/" component={Dashboard} />
            {/* <Route exact path="/" component={} /> */}
            {/* <Route exact path="/" component={} /> */}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
