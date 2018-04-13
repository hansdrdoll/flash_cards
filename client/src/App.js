import React, { Component } from "react";
import "./reset.css"
import "./App.css";
import MainView from './MainView';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainView />
      </div>
    );
  }
}

export default App;
