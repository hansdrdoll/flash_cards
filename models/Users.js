const db = require("../database/db-connection");

const Users = {};

// Create a new user in the database
Users.createUser = data => {
  // Add a row to database and return the id
  return db.one(
    "INSERT INTO users(username, password_adjust) VALUES($1, $2, $3, $4) RETURNING id",
    // Reference the values in the database
    [data.user_name, data.password_adjust, data.cards]
  );
};

// Edit an existing user in the database
Users.editUser = (id, data) => {
  // Update selected fields
  return db.result(
    "UPDATE users SET username = $1, cards = $2 WHERE id = $3",
    // Reference the values in the database
    [data.username, data.cards, data.id]
  );
};

// Delete an existing user from the database
Users.deleteUser = id => {
  // The row with the corresponding id will be deleted
  return db.result("DELETE FROM users WHERE id = $1", [id]);
};

// Find a specific user
Users.findUser = username => {
  return db.one("SELECT * FROM users WHERE id = $1", [username]);
};

// Export the model functions
module.exports = Users;
