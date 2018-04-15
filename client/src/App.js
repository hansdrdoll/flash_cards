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
import UserForm from "./UserForm";
import Register from "./Register";
import Login from "./Login";
import TokenService from "./TokenService";

class App extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  logOut(evt) {
    evt.preventDefault();
    TokenService.destroy();
  }

  register(data) {
    return fetch(`http://localhost:4567/api/user/new`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { return response.json() })
    .then(response => {
      TokenService.save(response.token)
    })
    .catch(err => console.log(`err: ${err}`));
  }

  login(data) {
    return fetch(`http://localhost:4567/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { return response.json() })
    .then(response => {
      TokenService.save(response.token);
    })
    .catch(err => console.log(`err: ${err}`));
  }


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
              <Route exact path="/play/normal" component={GameNormal} />
              <Route exact path="/play/tailored" component={GameTailored} />
              <Route exact path="/decks/new" component={CreateDeck} />
              <Route exact path="/register" component={(props) => (
                  <Register {...props} submit={this.register.bind(this)} />
              )} />
              <Route exact path="/login" component={(props) => (
                  <Login {...props} submit={this.login} />
              )} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
