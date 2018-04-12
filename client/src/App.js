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
        <div className="wrapper">
          <Sidebar />
          <MainView />
        </div>
      </div>
    );
  }
}

export default App;
