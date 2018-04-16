import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";
import GamePlay from "./GamePlay";
import GameNormal from "./GameNormal";
import GameTailored from "./GameTailored";
import UserForm from "./UserForm";
import Register from "./Register";
import Login from "./Login";
import TokenService from "./TokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loginRedirect: false,
      logoutRedirect: false
    };
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.checkToken = this.checkToken.bind(this);
  }

  componentDidMount() {
    this.checkToken();
  }

  logOut(evt) {
    evt.preventDefault();
    TokenService.destroy();
    this.setState({
      username: "",
      loginRedirect: false,
      logoutRedirect: true
    });
  }

  // regisers a user and places token in localStorage
  register(data) {
    return fetch(`http://localhost:4567/api/user/new`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        TokenService.save(response.token);
        this.checkToken(true);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // verifies credentials and places token in localStorage
  login(data) {
    return fetch(`http://localhost:4567/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        TokenService.save(response.token);
        this.checkToken(true);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  checkToken(loggedin) {
    // get the stored token from browser
    const token = { token: TokenService.read() };
    // if there was a token, check it
    fetch(`http://localhost:4567/api/user/check-token`, {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (loggedin) {
          this.setState({
            username: response,
            loginRedirect: true
          });
        } else {
          this.setState({
            username: response
          });
        }
      });
  }

  // To get access to the token for requests:
  // import TokenService from "../TokenService";
  // const token = TokenService.read();
  render() {
    return (
      <div className="app">
        <Router>
          <div className="all">
            <Header username={this.state.username} logOut={this.logOut} />
            <div className="main-view">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/decks/new" component={CreateDeck} />
              <Route
                exact
                path="/decks/:slug/edit"
                component={({ match }) => <EditDeck match={match} />}
              />
              <Route exact path="/deck/:slug/play" component={GamePlay} />
              <Route
                exact
                path="/deck/:slug/play/normal"
                component={GameNormal}
              />
              <Route
                exact
                path="/deck/:slug/play/tailored"
                component={GameTailored}
              />
              <Route
                exact
                path="/register"
                component={props => (
                  <Register {...props} submit={this.register} />
                )}
              />
              <Route
                exact
                path="/login"
                component={props => <Login {...props} submit={this.login} />}
              />
              {this.state.loginRedirect && <Redirect to="/dashboard" />}
              {this.state.logoutRedirect && <Redirect to="/dashboard" />}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
