import React, { Component } from "react";
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
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
