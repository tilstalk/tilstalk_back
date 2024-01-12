const express = require('express');
const cors = require ('cors')

require("dotenv").config()

const app = express();


app.use(express.json())
app.use(cors())
const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes")
const LoginRoutes = require("./routes/LoginRoutes")

app.use(AuthRegisterUserRoutes)
app.use(LoginRoutes)

const port = process.env.PORT || 3000;

 app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

require("./banco de dados/db")