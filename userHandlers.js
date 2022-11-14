const database = require("./database");
const postUser = (req, res) => {
    const { firstname, lastname, email, city, language } = req.body;
    database
      .query(
        "INSERT INTO users (firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
        [firstname, lastname, email, city, language]
      )
      .then(([result]) => {
        res.location(`/api/users/${result.insertId}`).sendStatus(201);  
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the movie");
      });
  };
  
  module.exports = {
    postUser,
  };
  