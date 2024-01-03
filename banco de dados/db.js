const mongoose = require("mongoose");


// Database connection URL
const dbUrl = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Connect to the database
const connect = () => {
  mongoose.connect(`mongodb+srv://${dbUrl}:${dbPassword}@cluster.8gsutur.mongodb.net/test?retryWrites=true&w=majority`)

  const connection = mongoose.connection;
  
  connection.on("error", () => {
    console.error("don't Connected to the database");
  })

  connection.on("open", () => {
    console.log("Connected to the database");
  })

}

connect();
module.exports = mongoose;
