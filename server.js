// Declare the necessary dependancies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const slugify = require("slugify");

// Specify express as the engine
const app = express();

app.use(cors());

// Import the necessary models from the models directory
const Users = require("./models/Users");
const Decks = require("./models/Decks");
const Cards = require("./models/Cards");
const Saved = require("./models/Saved");
const Progression = require("./models/Progression");
const TokenService = require("./services/TokenService");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
// Declare a static directory pointing to the yarn build file.
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (request, response) => {
  response.redirect();
});

// Create a POST route to the api for creating a new user
app.post("/api/user/new", jsonParser, (request, response) => {
  // Extract the data from the body
  const { username, password_digest } = request.body;
  const data = {
    username: username,
    password_digest: password_digest
  };
  // Insert the user inputs into the database in a new row in the corresponding fields
  console.log("server", request.body);
  Users.create(request.body)
    .then(data =>
      TokenService.makeToken({
        username: data.username
      })
    )
    .then(token => {
      response.json({
        token: token
      });
    });
});

// thanks ryan
app.post("/login", jsonParser, (request, response) => {
  Users.login(request.body)
    .then(data =>
      TokenService.makeToken({
        username: data
      })
    )
    .then(token => {
      response.json({
        token: token
      });
    })
    // throw error if user is not found
    .catch(err => console.log(`throwing an error: ${err}`));
});

// Create a get route to the api for all user information
app.get("/api/user", urlencodedParser, (request, response) => {
  // Extract the data from the body
  const data = request.body;
  // Get all the users and return a json object
  Users.findUser().then(data => {
    response.json(data);
  });
});

app.post("/api/user/check-token", jsonParser, (request, response) => {
  // Extract the data from the body
  const { token } = request.body;
  // Get all the users and return a json object
  TokenService.verify(token).then(data => {
    response.json(data.username);
  });
});

// Create a route to Edit exiting user
app.put("/api/user/:id/edit", (request, response) => {
  const id = Number(request.params.id);
  // Extract the data from the  body
  const data = request.body;
  // Update the user row in the database
  Users.editUser(id, data).then(data => {
    // Once the Update is complete, return a json object
    response.json(data);
  });
});

// Create a get route to the api for a specified users
app.get("/api/user/:id", urlencodedParser, (request, response) => {
  // Extract the id from the request
  const id = Number(request.params.id);
  // Get the user that corresponds to the passed ID
  Users.findUser(id).then(userData => {
    // Send the response with the user data to the browser in the form of a json
    response.json(userData);
  });
});

app.get("/api/decks", (request, response) => {
  Decks.getAll().then(data => {
    response.json(data);
  });
});

// Returns all decks associated with user when given token

app.post("/api/decks/user-decks", jsonParser, (request, response) => {
  TokenService.verify(request.body.token).then(data => {
    Decks.getUserDecks(data.username).then(data => {
      response.json(data);
    });
  });
});

// Create a new a route to post a new deck to the database

app.post("/api/decks/new", jsonParser, (request, response) => {
  const { title, token } = request.body;
  // slugify the deck title
  const slug = slugify(title, { lower: true });
  // verify the token into a username
  TokenService.verify(token).then(data => {
    Decks.create(title, slug, data.username).then(data => {
      response.json(data.id);
    });
  });
});

// Create a route insert a new card into the database
app.post("/api/deck/:slug/card/new", jsonParser, (request, response) => {
  // Extract the id from the url
  const slug = request.params.slug;
  // Extract the data from the URL
  const { question, answer } = request.body;
  const newCard = {
    question: question,
    answer: answer
  };
  // Insert a new row with the User input into the cards table
  Cards.create(newCard, deck_id).then(newCard => {
    response.json({ message: "ok" });
  });
});

// Create a route to Edit and existing deck
app.put("/api/decks/:deck_id/edit", jsonParser, (request, response) => {
  // Extract the data from the URL
  const data = request.body;
  const deckId = request.params.deck_id;

  // Update the row that corresponding to the id extracting
  Cards.update(data, deckId).then(data => {
    // Once the Update is complete, return a json object
    response.json(data);
  });
});

// Create a route to Edit and existing deck
app.put("/api/hans/:deck_id/title/edit", jsonParser, (request, response) => {
  // Extract the data from the URL
  const data = request.body;
  const deckId = request.params.deck_id;
  console.log("u got the server", data, deckId);
  // Update the row that corresponding to the id extracting
  Decks.updateTitle(data, deckId).then(data => {
    // Once the Update is complete, return a json object
    response.json(data);
  });
});

// Create a route that deletes and existing decks
app.delete("/api/deck/:deck_id", (request, response) => {
  // Extract the id from the URL
  const id = parseInt(request.params.id);
  // Delete the row with corresponding id
  Decks.delete(id).then(data => {
    response.json(data);
  });
});

// --- **CARDS** ---//

app.post("/api/deck/:deck_id/card/create", jsonParser, (request, response) => {
  const deck_id = request.params.deck_id;
  const arr = request.body;
  Cards.createMany(arr, deck_id);
});

// Create a route insert a new card into the database
app.post("/api/deck/:deck_id/card/new", (request, response) => {
  // Extract the id from the url
  const id = request.params.id;
  console.log(id);
  // Extract the data from the URL
  const data = request.body;
  // Insert a new row with the User input into the cards table
  Cards.create(data).then(data => {
    response.json(data);
  });
});

// Create a route to edit an existing card
app.put("/api/deck/:deck_id/card/edit", jsonParser, (request, response) => {
  // Extract the data from the URL
  const { question, answer } = request.body;
  const data = {
    question: question,
    answer: answer
  };
  // Update the request of the
  Cards.update(data);
  response.status(204);
  // .then(data => {
  //   // Return a json object
  //   response.status(204);
  // })
  // .catch(err => {
  //   response.json({ message: error });
  // });
});

// Create a route to get all the cards in the database

app.get("/api/decks/:slug", urlencodedParser, (request, response) => {
  // Get all the cards
  Cards.findByDeckSlug(request.params.slug).then(data => {
    // Then return in a json object
    response.json(data);
  });
});

// --- **Saved_Decks** ---//

// Create a route to POST to save a deck to a user
app.post("/api/saved/:deck_id/new", jsonParser, (request, response) => {
  // Extract the id from the URL
  const deckId = Number(request.params.deck_id);
  const { token } = request.body;
  // Send a request to the database to place the corresponding deck ID in the saved_decks join table
  TokenService.verify(token).then(token => {
    Saved.create(token.username, deckId);
    response.status(200);
  });
});

// Create a route to get all the user saved decks
app.get("/api/saved/:user_id", (request, response) => {
  const user_id = parseInt(request.params.user_id);
  console.log(user_id);
  // Extract the data from the URL
  const data = request.body;
  // Get all the saved deck associated with the user's ID
  Saved.savedDecks(user_id).then(data => {
    // Then return a json object
    response.json(data);
  });
});

// TODO: check if this should be jsonParser
app.post("/api/saved", urlencodedParser, (request, response) => {
  const { token } = request.body;
  TokenService.verify(token).then(data => {
    Saved.savedDecksByToken(data.username).then(data => {
      response.json(data);
    });
    // Get all the saved deck associated with the user's ID
    // Then return a json object
    response.json(data);
  });
});

app.post("/api/progresion/:card_id", jsonParser, (request, response) => {
  const { token } = request.body;
  const cardId = request.params.card_id;
  TokenService.verify(token).then(data => {
    Progression.create();
  });
});

app.post("/api/progresion/:card_id", jsonParser, (request, response) => {
  const { token } = request.body;
  const cardId = request.params.card_id;
  TokenService.verify(token).then(data => {
    Progression.create();
  });
});

// Declare a route for the yarn build
// This route is a catch all for all the one's above.
app.get("*", (request, response) => {
  // send the file to the yarns' index.js to the url provided by heroku
  response.sendFile(path.resolve(__dirname + "client/build/index.html"));
});

// Set the listening port for the server and log a confimatory message
app.listen(4567, () => console.log("Port 4567 is up!"));
