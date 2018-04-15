// Declare the necessary dependancies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const db = require('./database/db-connection')
const jsonParser = bodyParser.json()
// Specify express as the engine
const app = express()

app.use(cors())

// Import the necessary models from the models directory
const Users = require('./models/Users')
const Decks = require('./models/Decks')
const Cards = require('./models/Cards')
const Saved = require('./models/Saved')
const Progression = require('./models/Progression')
const tokenService = require('./services/TokenService')

// Create a POST route to the api for creating a new user
app.post('/api/user/new', jsonParser, (request, response) => {
  // Insert the user inputs into the database in a new row in the corresponding fields
  console.log('server', request.body)
  Users.create(request.body)
    .then(data =>
      tokenService.makeToken({
        username: data
      })
    )
    .then(token => {
      response.json({
        token: token
      })
    })
})

// thanks ryan
app.post('/login', jsonParser, (request, response) => {
  console.log(request.body)
  Users.login(request.body)
    .then(data =>
      tokenService.makeToken({
        username: data
      })
    )
    .then(token => {
      response.json({
        token: token
      })
    })
    // throw error if user is not found
    .catch(err => console.log(`throwing an error: ${err}`))
})

// Create a get route to the api for all user information
app.get('/api/user', urlencodedParser, (request, response) => {
  // Extract the data from the body
  const data = request.body
  // Get all the users and return a json object
  Users.findUser().then(data => {
    response.json(data)
  })
})

// Create a route to Edit exiting user
app.put('/api/user/:id/edit', (request, response) => {
  const id = Number(request.params.id)
  // Extract the data from the  body
  const data = request.body
  // Update the user row in the database
  Users.editUser(id, data).then(data => {
    // Once the Update is complete, return a json object
    response.json(data)
  })
})

// Create a get route to the api for a specified users
app.get('/api/user/:id', urlencodedParser, (request, response) => {
  // Extract the id from the request
  const id = Number(request.params.id)
  // Get the user that corresponds to the passed ID
  Users.findUser(id).then(userData => {
    // Send the response with the user data to the browser in the form of a json
    response.json(userData)
  })
})

app.get('/api/decks', (request, response) => {
  Decks.getAll().then(data => {
    response.json(data)
  })
})

// Create a get route that returns all decks associated with an individual user id
app.get('/api/decks/:user_id', urlencodedParser, (request, response) => {
  // Extract the data from the url
  const user_id = parseInt(request.params.user_id)
  // Get all the users decks from the database and return a json object
  Decks.getUserDecks(user_id).then(data => {
    response.json(data)
  })
})

// Create a new a route to post a new deck to the database
app.post('/api/deck/new', jsonParser, (request, response) => {
  // Extract the data from the url
  const data = request.body
  // Insert the user input a new row into the database with the corresponding input
  Decks.create(data).then(data => {
    // Once the POST is made return then json response
    response.json({ message: 'ok' })
  })
})

// Create a route to Edit and existing deck
app.put('/api/deck/:deck_id/edit', urlencodedParser, (response, request) => {
  // Extract the data from the URL
  const data = request.body
  // Update the row that corresponding to the id extracting
  Decks.update(data).then(data => {
    // Once the Update is complete, return a json object
    response.json(data)
  })
})

// Create a route that deletes and existing decks
app.post('/api/deck/:deck_id', (request, response) => {
  // Extract the id from the URL
  const id = Number(request.params.id)
  // Delete the row with corresponding id
  Decks.delete(id).then(data => {
    response.json(data)
  })
})

// --- **CARDS** ---//

// Create a route insert a new card into the database
app.post('/api/deck/:deck_id/card/new', (request, response) => {
  // Extract the id from the url
  const id = request.params.id
  console.log(id)
  // Extract the data from the URL
  const data = request.body
  // Insert a new row with the User input into the cards table
  Cards.create(data).then(data => {
    response.json(data)
  })
})

// Create a route to edit an existing card
app.put('/api/deck/:deck_id/card/edit', (request, response) => {
  // Extract the data from the URL
  const data = request.body
  // Update the request of the
  Cards.update(data)
    .then(data => {
      // Return a json object
      response.json(data)
    })
    .catch(err => {
      response.json({ message: error })
    })
})

// Create a route to get all the cards in the database
app.get('/api/deck/:deck_id/cards', urlencodedParser, (request, response) => {
  const deck_id = request.params.deck_id
  console.log(deck_id)
  // Extract the data from the URL
  const data = request.body
  // Get all the cards
  Cards.findAll(deck_id).then(data => {
    // Then return in a json object
    response.json(data)
  })
})

// --- **Saved_Decks** ---//

// Create a route to POST to save a deck to a user
app.post('/api/saved/:deck_id/new', (request, response) => {
  // Extract the id from the URL
  const id = Number(request.params.deck_id)
  // Send a request to the database to place the corresponding deck ID in the saved_decks join table
  Saved.create(id).then(data => {
    response.json(data)
  })
})

// Create a route to get all the user saved decks
app.get('/api/saved/:user_id', (request, response) => {
  const user_id = request.params.user_id
  console.log(user_id)
  // Extract the data from the URL
  const data = request.body
  // Get all the saved deck associated with the user's ID
  Saved.savedDecks(user_id).then(data => {
    // Then return a json object
    response.json(data)
  })
})

// Set the listening port for the server and log a confimatory message
app.listen(4567, () => console.log(`Port 4567 is up!`))
