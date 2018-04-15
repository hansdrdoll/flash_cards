const db = require("../database/db-connection");
const bcrypt = require("bcryptjs");

const Users = {};

// Create a new user in the database
Users.create = data => {
  const passwordDigest = bcrypt.hashSync(data.password, 10);
  // Add a row to database and return the id
  return db.one(
    "INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *",
    // Reference the values in the database
    [data.username, passwordDigest]
  );
};

Users.login = user => {
  return Users.findUser(user.username)
    .then(userData => {
      const isAuthed = bcrypt.compareSync(user.password, userData.password_digest);
      if (!isAuthed) throw new Error('Invalid Credentials');
      // returning the hashed password makes me feel weird
      return userData.username;
    })
}

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
  return db.one("SELECT * FROM users WHERE username = $1", [username]);
};

// Export the model functions
module.exports = Users;
