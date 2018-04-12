// Declare the necessary dependancies
const EXPRESS = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

// Create a get route to the api for a specified users
app.get("api/user/:id", (request, response) => {
  // Extract the id from the request
  const id = request.params.id;
  // Get the user that corresponds to the passed ID
  Users.findUser(id).then(userData => {
    // Send the response with the user data to the browser in the form of a json
    response.json(userData);
  });
});

// Create a POST route to the api for creating a new user
app.post("api/user/new", (request, response) => {
  // Extract the data from the body
  const data = request.body;
  // Insert the user inputs into the database in a new row in the corresponding fields
  Users.createUser(data).then(data => {
    // Once the POST is made redirect to the user ID api page
    response.json(data);
  });
});

// Set the listening port for the server and log a confimatory message
app.listen(4567, () => console.log(`Port 4567 is up!`));
