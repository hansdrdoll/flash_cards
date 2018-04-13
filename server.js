// Declare the necessary dependancies
const EXPRESS = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const db = reqiure("./database/db-connection");

// Require bcrypt
const bcrypt = require("bcryptjs");
// Stores a fixed salt key generated in the node repl
const salt = "$2a$10$iEe24ElSjus.JhY49OhY5u";

// Import the necessary models from the models directory
const Users = require("./models/Users");
const Decks = require("./models/Decks");
const Cards = require("./models/Cards");
const Progression = require("./models/Progression");

// Specify express as the engine
const app = EXPRESS();

// Create a get route to the api for all user information
app.get("/api/users", (request, response) => {
  // Extract the data from the body
  const data = request.body;
  // Get all the users and return a json object
  Users.findAllUser().then(data => {
    response.json(data);
  });
});

// Create a POST route to the api for creating a new user
app.post("api/user/new", (request, response) => {
  // Extract the data from the body
  const data = request.body;
  // Insert the user inputs into the database in a new row in the corresponding fields
  Users.createUser(data).then(data => {
    // Once the POST is made return then json response
    response.json(data);
  });
});

// Create a route to Edit exiting user
app.put("/api/user/:id/edit", (request, response) => {
  const id = request.params.id;
  // Extract the data from the  body
  const data = request.body;
  // Update the user row in the database
  Users.editUser(id, data).then(data => {
    // Once the Update is complete, return a json object
    response.json(data);
  });
});

// Create a get route to the api for a specified users
app.get("/api/user/:id", (request, response) => {
  // Extract the id from the request
  const id = request.params.id;
  // Get the user that corresponds to the passed ID
  Users.findUser(id).then(userData => {
    // Send the response with the user data to the browser in the form of a json
    response.json(userData);
  });
});

// Create a get route that returns all decks associated with an individual user id
app.get("/api/decks/:user_id", (request, response) => {
  // Extract the data from the url
  const id = request.params.id;
  // Get all the users decks from the database and return a json object
  Decks.getUserDecks(id).then(data => {
    response.json(data);
  });
});

// Create a new a route to post a new deck to the database
app.post("/api/deck/new", (request, response) => {
  // Extract the data from the url
  const data = request.body;
  // Insert the user input a new row into the database with the corresponding input
  Decks.create(data).then(data => {
    // Once the POST is made return then json response
    response.json(data);
  });
});

// Create a route to Edit and existing deck
app.put("/api/deck/:id/edit", (response, request) => {
  // Extract the data from the URL
  const data = request.body;
  // Update the row that corresponding to the id extracting
  Decks.update(data).then(data => {
    // Once the Update is complete, return a json object
    response.json(data);
  });
});

// Create a route that deletes and existing decks
app.post("/api/deck/:id", (request, response) => {
  // Extract the id from the URL
  const id = request.params.id;
  // Delete the row with corresponding id
  Decks.delete(id).then(data => {
    response.json(data);
  });
});

//--- **CARDS** ---//

// Create a route to get all the cards in the database
app.get("/api/deck/:id/cards", (request, response) => {
  // Extract the data from the URL
  const data = request.body;
  // Get all the cards
  Cards.findAll(data).then(data => {
    // Then return in a json object
    response.json(data);
  });
});

app.get("/api/card/");
// Set the listening port for the server and log a confimatory message
app.listen(4567, () => console.log(`Port 4567 is up!`));
