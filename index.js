const express = require('express');
const cors = require ('cors')

require("dotenv").config()

const app = express();

app.use(cors())
app.use(express.json())

const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes")

app.use(AuthRegisterUserRoutes)


const port = process.env.PORT || 3000;

 app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

require("./banco de dados/db")