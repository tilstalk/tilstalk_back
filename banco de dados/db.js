const mongoose = require("mongoose");
require('dotenv').config();

// Database connection URL
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Connect to the database
const connect = () => {
  mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster.8gsutur.mongodb.net/?retryWrites=true&w=majority`)

  const connection = mongoose.connection;
  
  connection.on("error", () => {
    console.error("Don't connected to the database");
  });

  connection.on("open", () => {
    console.log("Connected to the database");
  });
}

connect();
module.exports = mongoose;
